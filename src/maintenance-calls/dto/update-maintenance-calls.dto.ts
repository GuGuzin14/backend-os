import { IsBoolean, IsDecimal, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateMaintenanceDto {

    @IsOptional()
    @IsString()
    @MaxLength(200)
    problema?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    descricao?: string;


    @IsOptional()
    @IsDecimal(
        {decimal_digits: '2'},{
        message: 'esse campo deve ter no maximo duas casas decimais.'
    })
    valor?: number;

    @IsOptional()
    @IsBoolean()
    status?: boolean;

    @IsOptional()
    @IsString()
    prioridade?: string;

}