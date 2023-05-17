import { signupDto } from './dto/signup.dto';
import { signinDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { ResetPasswordDemandDto } from './dto/resetPasswordDemand.dto';
import { ResetPasswordConfirmationDto } from 'src/auth/dto/resetPasswordConfirmation.dto';
import { Request } from 'express';
import { DeleteAccountdto } from 'src/auth/dto/deleteAccount.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    resetPasswordDemand(resetPasswordDemandDto: ResetPasswordDemandDto): Promise<{
        data: string;
    }>;
    resetPasswordConfirmation(resetPasswordConfirmationDto: ResetPasswordConfirmationDto): Promise<{
        data: string;
    }>;
    deleteAccount(request: Request, deleteAccountDto: DeleteAccountdto): Promise<{
        data: string;
    }>;
}
