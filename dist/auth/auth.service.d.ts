import { signupDto } from './dto/signup.dto';
import { signinDto } from './dto/signin.dto';
import { ResetPasswordDemandDto } from './dto/resetPasswordDemand.dto';
import { ResetPasswordConfirmationDto } from './dto/resetPasswordConfirmation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from 'src/mailer/mailer.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DeleteAccountdto } from './dto/deleteAccount.dto';
export declare class AuthService {
    private readonly primaService;
    private readonly mailerService;
    private readonly jwtService;
    private readonly configService;
    constructor(primaService: PrismaService, mailerService: MailerService, jwtService: JwtService, configService: ConfigService);
    signup(signupDto: signupDto): Promise<{
        data: string;
    }>;
    signin(signinDto: signinDto): Promise<{
        token: string;
        user: {
            username: string;
            email: string;
        };
    }>;
    resetPasswordDemandDto(resetPasswordDemandDto: ResetPasswordDemandDto): Promise<{
        data: string;
    }>;
    resetPasswordConfirmationDto(resetPasswordConfirmationDto: ResetPasswordConfirmationDto): Promise<{
        data: string;
    }>;
    deleteAccount(userId: number, deleteAccountDto: DeleteAccountdto): Promise<{
        data: string;
    }>;
}
