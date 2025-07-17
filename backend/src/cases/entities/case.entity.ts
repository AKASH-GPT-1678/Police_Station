import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evidence } from './evidence.entity';
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
  
  @OneToMany(() => Evidence, (evidence) => evidence.case, { cascade: true })
  evidences: Evidence[];





}
