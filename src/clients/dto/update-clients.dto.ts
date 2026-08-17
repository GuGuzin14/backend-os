import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class UpdateClientsDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  nome?: string;

  @IsOptional()
  @IsString()
  @Length(11, 16)
  cpf?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  telefone?: string;

  @IsOptional()
  @IsDateString()
  dataNascimento?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  cep?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  endereco?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  bairro?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  numero?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  cidade?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  uf?: string;
}