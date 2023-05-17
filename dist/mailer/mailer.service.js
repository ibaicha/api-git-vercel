"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let MailerService = class MailerService {
    async transporter() {
        const testAccount = await nodemailer.createTestAccount();
        const transport = nodemailer.createTransport({
            host: 'localhost',
            port: 1025,
            ignoreTLS: true,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });
        return transport;
    }
    async sendSignupConfirmation(userEmail) {
        (await this.transporter()).sendMail({
            from: 'app@localhost.com',
            to: userEmail,
            subject: 'Inscription',
            html: '<h3>Confirmation of Inscription</h3>'
        });
    }
    async sendResetPassword(userEmail, url, code) {
        (await this.transporter()).sendMail({
            from: 'app@localhost.com',
            to: userEmail,
            subject: 'reset password demand',
            html: `
            <a href="${url}">Reset password></a>
            <p> Secret code: <strong>${code}</strong> </p>
            <p>Code will expire in 15 minutes</p>
            `,
        });
    }
};
MailerService = __decorate([
    (0, common_1.Injectable)()
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map