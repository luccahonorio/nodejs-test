import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('kits')
export default class Kit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({default: false})
    isDeleted: boolean;
}