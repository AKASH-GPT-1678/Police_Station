import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  place: string;

  @Column()
  type: string;

  @Column('text')
  description: string;
}
