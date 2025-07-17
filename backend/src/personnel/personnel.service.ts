import { Injectable } from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Attendance } from './entities/attendance';
import { CreateAttendanceDto } from './dto/create-attendance';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel) private personnelRepository: Repository<Personnel>,
    @InjectRepository(Attendance) private attendanceRepository: Repository<Attendance>,
  ) {}


  async createPersonel(createPersonnelDto: CreatePersonnelDto) {
    const personnel = this.personnelRepository.create(createPersonnelDto);
    const personalId = personnel.id;
    const attendance = this.createAttendance({ id: personalId });
    return await this.personnelRepository.save(personnel);

  }

  async createAttendance(createAttendanceDto: CreateAttendanceDto) {
    const attendance = this.attendanceRepository.create(createAttendanceDto);
    const attendanceId = attendance.id;
    return await this.attendanceRepository.save(attendance);
  }


  async saveDailyAttendance(){
    
  }


 
}
