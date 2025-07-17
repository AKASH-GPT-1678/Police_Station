import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}



  @Post('create')
  async create(@Body() createPersonnelDto: CreatePersonnelDto) {
    return await this.personnelService.createPersonel(createPersonnelDto);
  }

  @Get("attendance/:id")
  async createAttendance(@Param("id") id : string) {
    return await this.personnelService.createAttendance(id);
  }


  @Get("atteandancestats/:id")
  async getCompleteAttendance(@Param("id") id : string) {
    return await this.personnelService.getCompleteAttendance(id);
  }

  @Post('marktoday/:id')
  async markAttendance(@Param("id") id : string){
    return await this.personnelService.saveDailyAttendance(id);
  }

 
}
