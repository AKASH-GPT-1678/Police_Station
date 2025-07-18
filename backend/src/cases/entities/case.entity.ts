import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evidence } from './evidence.entity';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { CourtHearing } from './court-hearing.entity';
import { InvestigationActivity } from './investigation.entity';
import { People } from './people.entity';
@Entity()
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column("text", { array: true })
  suspects: string[];

  @OneToMany(() => Evidence, (evidence) => evidence.case, { cascade: true })
  evidences: Evidence[];

  @OneToMany(() => Personnel, (personnel) => personnel.case, { cascade: true })
  assignTo: Personnel[];
  @OneToMany(() => CourtHearing, (hearing) => hearing.case)
  hearings: CourtHearing[];

  @OneToMany(() => InvestigationActivity, (activity) => activity.case)
  activities: InvestigationActivity[];

  @OneToMany(() => People, (person) => person.case)
  people: People[];











}
