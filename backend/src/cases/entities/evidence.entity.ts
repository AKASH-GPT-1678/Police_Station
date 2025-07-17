import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Case } from './case.entity';

@Entity()
export class Evidence {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;  

  @Column()
  description: string;

  @Column()
  url: string;  

  @ManyToOne(() => Case, (casee) => casee.evidences, { onDelete: 'CASCADE' })
  case: Case;
}
