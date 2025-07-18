// court-hearing.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Case } from './case.entity';

@Entity()
export class CourtHearing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  courtName: string;

  @Column()
  date: string;

  @Column()
  judgeName: string;

  @Column({ type: 'text' })
  summary: string;

  @ManyToOne(() => Case, (caseEntity) => caseEntity.hearings)
  case: Case;
}
