import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './entities/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

 @Post('create')
  async create(@Body() createCaseDto: CreateCaseDto) {
    return await this.casesService.createCase(createCaseDto);
  }


}
