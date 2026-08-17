import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
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
}