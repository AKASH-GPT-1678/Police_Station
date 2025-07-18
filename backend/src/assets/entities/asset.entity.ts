import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Personnel } from 'src/personnel/entities/personnel.entity';



export enum AssetCategory {
  WEAPON = 'Weapon',
  VEHICLE = 'Vehicle',
  ELECTRONICS = 'Electronics',
  UNIFORM = 'Uniform',
  COMMUNICATION = 'Communication',
  OTHER = 'Other',
}


@Entity()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: AssetCategory;  // Example: Weapon, Vehicle, Electronics

  @Column({ unique: true })
  serialNumber: string;

  @Column()
  status: string; 

  @Column()
  value: number;

  @Column({ type: 'date' })
  purchaseDate: string;

  @Column()
  location: string; // Example: Armory Room, Vehicle Garage

  @ManyToOne(() => Personnel, (personnel) => personnel.assets, { nullable: true })
  personnel: Personnel;
};
