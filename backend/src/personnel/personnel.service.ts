import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Attendance } from './entities/attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance';
import { generateAttendanceId } from 'utils/attendanceId';
import { DailyAttendance } from './entities/dailyattendance.entity';
import { Raw } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel) private personnelRepository: Repository<Personnel>,
    @InjectRepository(Attendance) private attendanceRepository: Repository<Attendance>,
    @InjectRepository(DailyAttendance) private dailyattendanceRepository: Repository<DailyAttendance>
  ) { }


  async createPersonel(createPersonnelDto: CreatePersonnelDto) {
    const personnel = this.personnelRepository.create(createPersonnelDto);
    const savedPersonnel = await this.personnelRepository.save(personnel);
    return savedPersonnel;

  }

  async createAttendance(id: string) {
    try {
      const attendance = this.attendanceRepository.create({ id });
      return await this.attendanceRepository.save(attendance);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }


  async saveDailyAttendance(id: string) {

    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'

    const isRegistered = await this.dailyattendanceRepository.findOne({
      where: {
        userId: id,
        date: Raw((alias) => `DATE(${alias}) = '${today}'`)
      }
    });

    if (isRegistered) {
      throw new BadRequestException("You have already marked attenadance for today");
    }
    const dailyattendanceId = generateAttendanceId(new Date())
    const attenadance = await this.attendanceRepository.findOne({
      where: {
        id: id
      }
    });

    if (!attenadance) {
      throw new NotFoundException("Ateendance Record with this id not found")
    }

    const dailyAttendance = this.dailyattendanceRepository.create({
      // Ensure 'id' exists in DailyAttendance entity
      id: dailyattendanceId,  // Your function to generate unique ID
      date: new Date(),
      userId: id ,
      month: new Date().toLocaleString('default', { month: 'long' }),
      count: 1,
      status: true,
      attendance: attenadance
    });

    await this.dailyattendanceRepository.save(dailyAttendance);

    return "Attendance Registered Sucessfully";


  }




  async getCompleteAttendance(id: string) {

    const data = await this.attendanceRepository.findOne({ where: { id: id }, select: ["id", "dailyAttendances"], relations: ["dailyAttendances"] });


    const today = new Date().toISOString().split("T")[0];

    const matched = data?.dailyAttendances.find((d) => {
      const recordDate = new Date(d.date).toISOString().split("T")[0];
      return recordDate === today;
    });

    return data;

  }



}
