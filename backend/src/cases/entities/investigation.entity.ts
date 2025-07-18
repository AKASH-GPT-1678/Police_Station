// investigation-activity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Case } from './case.entity';

@Entity()
export class InvestigationActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  actionTitle: string; // e.g., "Visited crime scene", "Collected fingerprints"

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  doneAt: Date;

  @ManyToOne(() => Case, (caseEntity) => caseEntity.activities)
  case: Case;
}
