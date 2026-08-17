import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1784939592323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE "users" (
                id SERIAL,
                nome VARCHAR(256) NOT NULL,
                email VARCHAR(256) NOT NULL,
                senha VARCHAR(256) NOT NULL,

                 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
                 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

                CONSTRAINT id_pk_user PRIMARY KEY (id),
                CONSTRAINT email_uk_user UNIQUE (email)
            );
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            DROP TABLE IF EXISTS "user";
        `);

    }
}