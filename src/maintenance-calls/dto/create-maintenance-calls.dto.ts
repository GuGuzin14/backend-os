import { IsBoolean, IsDecimal, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateMaintenanceDto {

    @IsString()
    @MaxLength(200)
    problema!: string;

    @IsString()
    @MaxLength(200)
    descricao!: string;

    @IsDecimal(
        {decimal_digits: '2'},{
        message: 'esse campo deve ter no maximo duas casas decimais.'
    })
    valor!: number;

    @IsBoolean()
    status!: boolean;

    @IsString()
    prioridade!: string;

}