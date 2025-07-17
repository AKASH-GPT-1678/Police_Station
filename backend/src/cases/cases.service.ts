import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from './entities/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { In, Repository } from 'typeorm';
import { Evidence } from './entities/evidence.entity';
import { AddEvidenceDto } from './dto/addEvidence';

@Injectable()
export class CasesService {

constructor(
  @InjectRepository(Case) private caseRepository: Repository<Case>,
  @InjectRepository(Evidence) private evidenceRepository: Repository<Evidence>,
) {}

 async createCase(createCaseDto: CreateCaseDto ): Promise<Case> {
    const casee = new Case();
    casee.title = createCaseDto.title;
    casee.description = createCaseDto.description;
    casee.status = createCaseDto.status;

    return await this.caseRepository.save(casee);  // 🟢 save to DB
  }



  async saveEvidence(addEvidenceDto : AddEvidenceDto){
    const cases  = await this.caseRepository.findOne({where : {id : addEvidenceDto.caseId}});

    if(!cases){
      throw new Error('Case not found');
    }
 


    const evidence = new Evidence();
    evidence.type = addEvidenceDto.type;
    evidence.description = addEvidenceDto.description;
    evidence.url = addEvidenceDto.imgUrl;
    evidence.case = cases;
    await this.evidenceRepository.save(evidence);
  }



}

