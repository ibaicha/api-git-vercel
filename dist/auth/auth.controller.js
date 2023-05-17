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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const passport_1 = require("@nestjs/passport");
const signup_dto_1 = require("./dto/signup.dto");
const signin_dto_1 = require("./dto/signin.dto");
const auth_service_1 = require("./auth.service");
const resetPasswordDemand_dto_1 = require("./dto/resetPasswordDemand.dto");
const resetPasswordConfirmation_dto_1 = require("./dto/resetPasswordConfirmation.dto");
const deleteAccount_dto_1 = require("./dto/deleteAccount.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    signin(signinDto) {
        return this.authService.signin(signinDto);
    }
    resetPasswordDemand(resetPasswordDemandDto) {
        return this.authService.resetPasswordDemandDto(resetPasswordDemandDto);
    }
    resetPasswordConfirmation(resetPasswordConfirmationDto) {
        return this.authService.resetPasswordConfirmationDto(resetPasswordConfirmationDto);
    }
    deleteAccount(request, deleteAccountDto) {
        const userId = request.user["userId"];
        return this.authService.deleteAccount(userId, deleteAccountDto);
    }
};
__decorate([
    (0, common_1.Post)("signup"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.signupDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("signin"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.signinDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)("reset-password"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPasswordDemand_dto_1.ResetPasswordDemandDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPasswordDemand", null);
__decorate([
    (0, common_1.Post)("reset-password-confirmation"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPasswordConfirmation_dto_1.ResetPasswordConfirmationDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPasswordConfirmation", null);
__decorate([
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Delete)("delete"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, decorators_1.Req)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, deleteAccount_dto_1.DeleteAccountdto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "deleteAccount", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentification'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map