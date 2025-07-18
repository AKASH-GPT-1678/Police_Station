// people.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Case } from './case.entity';

export enum PersonRole {
  SUSPECT = 'suspect',
  WITNESS = 'witness',
  VICTIM = 'victim',
}

@Entity()
export class People {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  aadharNumber: string;

  @Column()
  contactNumber: string;

  @Column({ type: 'enum', enum: PersonRole })
  role: PersonRole;

  @Column({ nullable: true })
  address: string;

  @ManyToOne(() => Case, (caseEntity) => caseEntity.people)
  case: Case;
}
