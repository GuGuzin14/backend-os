import { MigrationInterface, QueryRunner } from "typeorm";

export class  CreateMaintenanceCalls1784945608071 implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "maintenance_calls" (
        id SERIAL,

        client_id INTEGER NOT NULL,
        equipment_id INTEGER NOT NULL,
        technician_id INTEGER,

        problema VARCHAR(255) NOT NULL,
        descricao TEXT,
        valor DECIMAL(10,2) NOT NULL,

        status VARCHAR(30) NOT NULL DEFAULT 'aguardando',
        prioridade VARCHAR(20) NOT NULL DEFAULT 'media',

        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT maintenance_calls_pk
            PRIMARY KEY (id),

        CONSTRAINT maintenance_calls_client_fk
            FOREIGN KEY (client_id)
            REFERENCES "clients"(id)
            ON DELETE CASCADE,

        CONSTRAINT maintenance_calls_equipment_fk
            FOREIGN KEY (equipment_id)
            REFERENCES "equipments"(id)
            ON DELETE CASCADE,

        CONSTRAINT maintenance_calls_technician_fk
            FOREIGN KEY (technician_id)
            REFERENCES "user"(id)
            ON DELETE SET NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS "maintenance_calls";
    `);
  }
}