import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin';
import { SignupDto } from './dto/signup';
export declare class AuthService {
    private readonly usersRepo;
    private readonly jwtService;
    constructor(usersRepo: UsersRepository, jwtService: JwtService);
    signin(signinDto: SigninDto): Promise<{
        accessToken: string;
    }>;
    signup(signupDto: SignupDto): Promise<{
        accessToken: string;
    }>;
    private generateAccessToken;
}
