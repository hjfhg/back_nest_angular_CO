import { Controller, Post,Body} from '@nestjs/common';
import { RegisterAuthDto } from '../users/dto/register-auth.dto';
import { LoginAuthDto } from '../users/dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){  
    }
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
        console.log(userObj);
         return userObj;
    }

    @Post('login')
     Login(@Body() credenciales: LoginAuthDto){

     }
}


