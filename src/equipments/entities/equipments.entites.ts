import { Client } from "src/clients/entities/clients.entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('equipments')

export class Equipment {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column({length: 100})
    nome!: string;

    @Column({length: 20})
    categoria!: string;

    @Column({length: 200})
    descricao?: string;

    @Column()
    status!: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt?: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt?: Date;

    @ManyToOne(() => Client, client => client.equipments)
    @JoinColumn({name: 'client_id'})
    client!: Client;
}