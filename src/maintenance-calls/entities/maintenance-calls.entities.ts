import { Client } from "src/clients/entities/clients.entities";
import { Equipment } from "src/equipments/entities/equipments.entites";
import { User } from "src/user/entities/user.entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('maintenance-calls')

export class MaintenanceCalls {


    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100})
    problema!: string;

    @Column({length: 150})
    descricao?: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    valor!: string;

    @Column()
    status!: boolean;

    @Column({length: 50})
    prioridade!: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt!: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt?: Date;

    @ManyToOne(() => Client, client => client.maintenance)
    @JoinColumn({name: 'client_id'})
    client!: Client;

    @ManyToOne(() => Equipment, equipments => equipments.maintenance)
    @JoinColumn({name: 'equipment_id'})
    equipment!: Equipment;

    @ManyToOne(()=> User, user => user.maintenance)
    @JoinColumn({name: 'technician_id'})
    user!: User;

}