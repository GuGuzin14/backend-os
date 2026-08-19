import { IsBoolean, IsString } from "class-validator";

export class CreateEquipmentsDto {

@IsString()
nome!: string;

@IsString()
categoria!: string;

@IsString()
descricao?: string;

@IsBoolean()
status!: boolean;

}