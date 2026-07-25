import { MigrationInterface, QueryRunner } from "typeorm";

export class  CreateClients1784941621430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "clients"(
            id SERIAL,
            nome varchar(256) NOT NULL,
            cpf varchar(50) NOT NULL,
            email varchar(256) NOT NULL,
            telefone varchar(25) NOT NULL,
            dataNascimento DATE NOT NULL,
            cep varchar(10) NOT NULL,
            endereco varchar(256) NOT NULL,
            bairro varchar(100),
            numero varchar(10),
            cidade varchar(100) NOT NULL,
            uf varchar(2) NOT NULL,
            
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

            CONSTRAINT clients_pk_id PRIMARY KEY(id),
            CONSTRAINT clients_uk_email UNIQUE(email),
            CONSTRAINT clients_uk_cpf UNIQUE(cpf)
            );    
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "clients";`)
    }

}
