import { Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { Attendance } from './entities/attendance.entity';
import { DailyAttendance } from './entities/dailyattendance.entity';
import { Case } from 'src/cases/entities/case.entity';
import { PersonnelBackUp } from './entities/personal-backup.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Personnel, Attendance, DailyAttendance, Case, PersonnelBackUp])],
  controllers: [PersonnelController],
  providers: [PersonnelService],
})
export class PersonnelModule {}
// const personnelManagementFeatures = [
//   "Create Officer with Admin Verification",
//   "Delete Personnel with Admin Verification",
//   "Update Records",
//   "Transfer to Police Station",
//   "Assign Case",
//   "Attendance Tracking",
//   "Duty Scheduling",
//   "Complaint Against Personnel",
//   "Leave Management System",
//   "Transfer History",
//   "Promotion & Rank Tracking"
// ];
