import { Column, Entity  , OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
import { DailyAttendance } from "./dailyattendance.entity";



@Entity()
export class Attendance {
      @PrimaryColumn()
      id: string;

      @OneToMany(() => DailyAttendance, (dailyAttendance) => dailyAttendance.attendance)
      dailyAttendances: DailyAttendance[]


      
    

    
}