import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from './entities/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CasesService {

  constructor(@InjectRepository(Case) private caseRepository : Repository<Case>,){}
 async createCase(createCaseDto: CreateCaseDto ): Promise<Case> {
    const casee = new Case();
    casee.title = createCaseDto.title;
    casee.description = createCaseDto.description;
    casee.status = createCaseDto.status;

    return await this.caseRepository.save(casee);  // 🟢 save to DB
  }



}

