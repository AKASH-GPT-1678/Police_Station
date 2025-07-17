import { Column, Entity  , PrimaryGeneratedColumn} from "typeorm"



@Entity()
export class Attendance {
      @PrimaryGeneratedColumn('uuid')
      id: string;


      @Column()
      date: string;

      @Column()
      status: string

      @Column()
      month: string


      
    

    
}