import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Finance, FinanceType } from './finance.entity';
// import { PoliceStation } from 'src/police-station/entities/police-station.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string; // e.g., "Uniform Purchase", "Speeding Fine", etc.

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  type: FinanceType; 

  @Column({ nullable: true })
  description?: string;

  @Column()
  paymentMethod: string; 

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  invoiceUrl: string;





  @ManyToOne(() => Finance, (finance) => finance.transactions)
  finance: Finance;


}
