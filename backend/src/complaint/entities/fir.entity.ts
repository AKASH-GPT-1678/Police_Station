import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Incident } from './inciden.entity';

@Entity()
export class FIR {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  firNo: string;

  @Column()
  policeStation: string;

  @Column()
  dateOfFiling: string;

  // Complainant details
  @Column()
  complainantName: string;

  @Column()
  complainantAge: number;

  @Column()
  complainantGender: string;


  @Column()
  modeOfComplaint: ModeofComplaint;

  @Column()
  complainantAddress: string;

  @Column()
  complainantContact: string;

  // Link to Incident
  @OneToOne(() => Incident, { cascade: true, eager: true })
  @JoinColumn()
  incident: Incident;

  @Column()
  accused: string;

  @Column()
  victim: string;

  @Column()
  isVerified: boolean;


  @Column("text", { array: true })
  sectionsApplied: string[];

}


export enum ModeofComplaint {
  Online = "Online",
  Offline = "Offline"
}