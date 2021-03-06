import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class EmployeeEntity {

    @PrimaryGeneratedColumn({name:'employee_id'})
    id: string;

    @Column()
    last: string;

    @Column()
    first: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({type :'boolean', default: true})
    active: boolean;

    @Column({type :'int', default: 0})
    departement: number;

}