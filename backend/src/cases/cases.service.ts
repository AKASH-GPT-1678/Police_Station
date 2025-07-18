import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCaseDto } from './entities/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { In, Repository } from 'typeorm';
import { Evidence } from './entities/evidence.entity';
import { AddEvidenceDto } from './dto/addEvidence';
import { AssignCaseDto } from './dto/assignCaseDto';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { CourtHearing } from './entities/court-hearing.entity';
import { InvestigationActivity } from './entities/investigation.entity';
import { People, PersonRole } from './entities/people.entity';
import { AddPersonDto } from './dto/addPersonDto';
import { FIR } from 'src/complaint/entities/fir.entity';

@Injectable()
export class CasesService {

  constructor(
    @InjectRepository(Case) private caseRepository: Repository<Case>,
    @InjectRepository(Evidence) private evidenceRepository: Repository<Evidence>,
    @InjectRepository(Personnel) private personnelRepository: Repository<Personnel>,
    @InjectRepository(CourtHearing)
    private readonly hearingRepo: Repository<CourtHearing>,

    @InjectRepository(InvestigationActivity)
    private readonly activityRepo: Repository<InvestigationActivity>,

    @InjectRepository(People)
    private readonly peopleRepo: Repository<People>,

    @InjectRepository(FIR)
    private readonly firRepo: Repository<FIR>,
  ) { }

  async createCase(createCaseDto: CreateCaseDto): Promise<Case> {

    const fir = await this.firRepo.findOne({ where: { id: createCaseDto.firId } });

    if (!fir) {
      throw new Error('FIR not found');
    };

    if(createCaseDto.adminSignature != process.env.ADMIN_SIGNATURE) {
      throw new Error('Unauthorized');

    };

    const casee = new Case();
    casee.title = createCaseDto.title;
    casee.firId = fir.id;
  
    casee.description = createCaseDto.description;
    casee.status = createCaseDto.status;

    return await this.caseRepository.save(casee);  // 🟢 save to DB
  };





  async saveEvidence(addEvidenceDto: AddEvidenceDto) {
    const cases = await this.caseRepository.findOne({ where: { id: addEvidenceDto.caseId } });

    if (!cases) {
      throw new Error('Case not found');
    }

    const evidence = new Evidence();
    evidence.type = addEvidenceDto.type;
    evidence.description = addEvidenceDto.description;
    evidence.url = addEvidenceDto.imgUrl;
    evidence.case = cases;
    await this.evidenceRepository.save(evidence);
  };



  async assignCases(cases: AssignCaseDto) {

    const casee = await this.caseRepository.findOne({ where: { id: cases.caseId } });

    if (!casee) {
      throw new Error('Case not found');
    }

    const personnel = await this.personnelRepository.findOne({ where: { id: cases.personnelId } });

    if (!personnel) {
      throw new Error('Personnel not found');
    };

    casee.assignTo.push(personnel);
    await this.caseRepository.save(casee);

  };

  async addCourtHearing(caseId: number, data: {
    courtName: string;
    date: string;
    judgeName: string;
    summary: string;
  }) {
    const caseEntity = await this.getCaseOrFail(caseId);

    const hearing = this.hearingRepo.create({
      ...data,
      case: caseEntity
    });

    return await this.hearingRepo.save(hearing);
  }

  // --------------------------
  // 🔍 INVESTIGATION ACTIVITY METHODS
  // --------------------------

  async addInvestigationActivity(caseId: number, data: {
    actionTitle: string;
    description: string;
  }) {
    const caseEntity = await this.getCaseOrFail(caseId);

    const activity = this.activityRepo.create({
      ...data,
      case: caseEntity
    });

    return await this.activityRepo.save(activity);
  }

  // --------------------------
  // 👤 PEOPLE METHODS (SUSPECT / WITNESS / VICTIM)
  // --------------------------

  async addPersonToCase(data: AddPersonDto) {
    const caseEntity = await this.getCaseOrFail(data.caseId);

    const person = this.peopleRepo.create({
      ...data,
      case: caseEntity
    });

    return await this.peopleRepo.save(person);
  }

  async removePersonFromCase(personId: string) {
    const person = await this.peopleRepo.findOne({ where: { id: personId } });
    if (!person) throw new NotFoundException('Person not found');

    return await this.peopleRepo.remove(person);
  };

  private async getCaseOrFail(caseId: number): Promise<Case> {
    const found = await this.caseRepository.findOne({ where: { id: caseId } });
    if (!found) throw new NotFoundException('Case not found');
    return found;
  };

  async getFullCaseById(caseId: number) {
    const caseDetails = await this.caseRepository.findOne({
      where: { id: caseId },
      relations: ['assignTo', 'hearings', 'activities', 'evidence', 'people'],
    });

    if (!caseDetails) throw new NotFoundException('Case not found');
    return caseDetails;
  };
  async updateCaseStatus(caseId: number, newStatus: string) {
    const caseEntity = await this.getCaseOrFail(caseId);
    caseEntity.status = newStatus;
    return await this.caseRepository.save(caseEntity);
  }






}

