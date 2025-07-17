import { Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';

@Module({
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
