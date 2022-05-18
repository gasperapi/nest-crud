import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;
    
    @Column() //Fk -> flight
    flight_id: string;
    
    @Column()
    ticket_type: string;
    
    @Column()
    ticket_date:Date;
    
}
