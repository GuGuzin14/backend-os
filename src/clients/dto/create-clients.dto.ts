import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateClientsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome!: string;

  @IsString()
  @Length(11, 16)
  cpf!: string;

  @IsEmail()
  @MaxLength(100)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  telefone?: string;

  @IsDateString()
  dataNascimento!: Date;

  @IsString()
  @MaxLength(20)
  cep!: string;

  @IsString()
  @MaxLength(100)
  endereco!: string;

  @IsString()
  @MaxLength(50)
  bairro!: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  numero?: string;

  @IsString()
  @MaxLength(100)
  cidade!: string;

  @IsString()
  @Length(2, 2)
  uf!: string;
}