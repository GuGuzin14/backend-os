import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEquipments1784943035573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE "equipments" (
                id SERIAL,
                client_id INTEGER NOT NULL,
                nome VARCHAR(256) NOT NULL,
                categoria VARCHAR(100) NOT NULL,
                descricao VARCHAR(200) NOT NULL,
                status VARCHAR(50) NOT NULL,

                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

                CONSTRAINT id_pk_eqpmt PRIMARY KEY (id),
                CONSTRAINT id_fk_client
                    FOREIGN KEY (client_id)
                    REFERENCES "clients"(id)
                    ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "equipments";
        `);
    }
}