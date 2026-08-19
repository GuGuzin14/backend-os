import {IsEmail, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'

export class CreateUserDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nome?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    senha?: string;

}