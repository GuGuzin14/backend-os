import { MaintenanceCalls } from "src/maintenance-calls/entities/maintenance-calls.entities";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    nome!: string;

    @Column({unique: true, length: 100})
    emall!: string;

    @Column({length: 100})
    passwordHash!: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt?: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt?: Date;

    @OneToMany(() => MaintenanceCalls, maintenance => maintenance.user)
    maintenance?: MaintenanceCalls;
}