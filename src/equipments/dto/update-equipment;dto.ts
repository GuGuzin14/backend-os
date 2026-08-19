import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateEquipmentDto {

    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    categoria?: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsOptional()
    @IsBoolean()
    status?: boolean;

}