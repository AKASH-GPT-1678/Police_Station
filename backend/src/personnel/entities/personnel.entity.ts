import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum PersonnelRole {
  Constable = 'Constable',
  HeadConstable = 'Head Constable',
  SubInspector = 'Sub-Inspector',
  Inspector = 'Inspector',
  ACP = 'ACP',
  DCP = 'DCP',
  Commissioner = 'Commissioner'
}

@Entity()
export class Personnel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: PersonnelRole
  })
  role: PersonnelRole;

  @Column({ unique: true })
  badgeNumber: string;

  @Column()
  station: string;
}
