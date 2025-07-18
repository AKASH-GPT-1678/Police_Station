import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Transaction } from './transaction.entity';
// import { FinanceType } from '../enums/finance-type.enum';
// import { PoliceStation } from 'src/police-station/entities/police-station.entity';

export enum FinanceType {
    EXPENSE = 'expense',
    INCOME = 'income',
    GRANT = 'grant',
    FINE = 'fine',
    SALARY = 'salary',
};



@Entity()
export class Finance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    stationId: string;


    @OneToMany(() => Transaction, (transaction) => transaction.finance)
    transactions: Transaction[]


    @Column()
    income: number


    @Column()
    expense: number

    @Column()
    balance: number

    @Column()
    fine: number

    @Column()
    grant: number


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
