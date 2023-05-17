"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const speakease = require("speakeasy");
const mailer_service_1 = require("../mailer/mailer.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(primaService, mailerService, jwtService, configService) {
        this.primaService = primaService;
        this.mailerService = mailerService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signup(signupDto) {
        const { email, password, username, roleId } = signupDto;
        const user = await this.primaService.user.findUnique({ where: { email } });
        if (user)
            throw new common_1.ConflictException('User already exists');
        const hash = await bcrypt.hash(password, 10);
        await this.primaService.user.create({
            data: {
                email, username, password: hash, roleId
            },
        });
        await this.mailerService.sendSignupConfirmation(email);
        return { data: 'User successfully created' };
    }
    async signin(signinDto) {
        const { email, password } = signinDto;
        const user = await this.primaService.user.findUnique({ where: { email } });
        if (!user)
            throw new common_1.NotFoundException('User does not exist');
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            throw new common_1.UnauthorizedException('Password does not match password');
        const payload = {
            sub: user.id,
            email: user.email,
            username: user.username
        };
        const token = this.jwtService.sign(payload, { expiresIn: '1h', secret: this.configService.get('SECRET_KEY') });
        return {
            token,
            user: {
                username: user.username,
                email: user.email
            }
        };
    }
    async resetPasswordDemandDto(resetPasswordDemandDto) {
        const { email } = resetPasswordDemandDto;
        const user = await this.primaService.user.findUnique({ where: { email } });
        if (!user)
            throw new common_1.NotFoundException('User does not exist');
        const code = speakease.totp({
            secret: this.configService.get('OTP_CODE'),
            digits: 5,
            step: 60 * 15,
            encoding: 'base32'
        });
        const url = "http://localhost:3000/auth/reset-password/";
        await this.mailerService.sendResetPassword(email, url, code);
        return {
            data: "Reset password mail has been sent"
        };
    }
    async resetPasswordConfirmationDto(resetPasswordConfirmationDto) {
        const { code, email, password } = resetPasswordConfirmationDto;
        const user = await this.primaService.user.findUnique({ where: { email } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const match = speakease.totp.verify({
            secret: this.configService.get('OTP_CODE'),
            token: code,
            digits: 5,
            step: 60 * 15,
            encoding: 'base32',
        });
        if (!match)
            throw new common_1.UnauthorizedException('Invalid/expired token');
        const hash = await bcrypt.hash(password, 10);
        await this.primaService.user.update({
            where: { email },
            data: { password: hash }
        });
        return {
            data: "Password updated"
        };
    }
    async deleteAccount(userId, deleteAccountDto) {
        const { password } = deleteAccountDto;
        const user = await this.primaService.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            throw new common_1.UnauthorizedException('Password does not match');
        await this.primaService.user.delete({ where: { id: userId } });
        return { data: 'User successfully deleted' };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map