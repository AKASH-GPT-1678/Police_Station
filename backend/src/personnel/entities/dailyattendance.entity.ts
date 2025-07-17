import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Attendance } from "./attendance.entity";


@Entity()
export class DailyAttendance {

    @PrimaryColumn()
    id: string

    @Column()
    date: Date
    
    @Column()
    userId : string


    @Column()
    month: string

    @Column()
    count : number

    @Column({default : false})
    status: boolean

    @ManyToOne(() => Attendance, (attendance) => attendance.dailyAttendances)
    attendance: Attendance





}