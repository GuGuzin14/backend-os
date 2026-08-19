
import { Equipment} from "src/equipments/entities/equipments.entites";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client{

    @PrimaryGeneratedColumn()
    id! : string;

    @Column({length: 100})
    nome!: string;

    @Column({unique: true, length: 16})
    cpf!: string;

    @Column({unique: true, length: 100})
    email!: string;

    @Column({length: 100})
    telefone?: string;

    @Column()
    dataNascimento!: Date;

    @Column({length: 20})
    cep!: string;

    @Column({length: 100})
    endereco!: string;

    @Column({length: 50})
    bairro!: string;

    @Column({length: 30})
    numero?: string;

    @Column({length: 100})
    cidade!: string;

    @Column({length: 2})
    uf!: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt!: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt!: Date;

    
    @OneToMany(() => Equipment, equipment => equipment.client)
    equipments?: Equipment[]

}