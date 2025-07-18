import { 
  Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete 
} from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './entities/create-case.dto';
import { AddEvidenceDto } from './dto/addEvidence';
import { AssignCaseDto } from './dto/assignCaseDto';
import { AddPersonDto } from './dto/addPersonDto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  // 🟢 1. Create a new case
  @Post('create')
  async createCase(@Body() createCaseDto: CreateCaseDto) {
    return await this.casesService.createCase(createCaseDto);
  }

  // 📁 2. Add evidence to case
  @Post('add-evidence')
  async addEvidence(@Body() addEvidenceDto: AddEvidenceDto) {
    return await this.casesService.saveEvidence(addEvidenceDto);
  }

  // 👮 3. Assign personnel to case
  @Post('assign')
  async assignCase(@Body() assignDto: AssignCaseDto) {
    return await this.casesService.assignCases(assignDto);
  }

  // ⚖️ 4. Add court hearing
  @Post(':caseId/add-hearing')
  async addCourtHearing(
    @Param('caseId', ParseIntPipe) caseId: number,
    @Body() data: {
      courtName: string;
      date: string;
      judgeName: string;
      summary: string;
    }
  ) {
    return await this.casesService.addCourtHearing(caseId, data);
  }

  // 🕵️ 5. Add investigation activity
  @Post(':caseId/add-activity')
  async addActivity(
    @Param('caseId', ParseIntPipe) caseId: number,
    @Body() data: {
      actionTitle: string;
      description: string;
    }
  ) {
    return await this.casesService.addInvestigationActivity(caseId, data);
  }

  // 👤 6. Add person (suspect/witness/victim) to case
  @Post('add-person')
  async addPerson(@Body() addPersonDto: AddPersonDto) {
    return await this.casesService.addPersonToCase(addPersonDto);
  }

  // ❌ 7. Remove person from case
  @Delete('remove-person/:personId')
  async removePerson(@Param('personId') personId: string) {
    return await this.casesService.removePersonFromCase(personId);
  }

  // 🔍 8. Get full case details by ID
  @Get(':caseId')
  async getCase(@Param('caseId', ParseIntPipe) caseId: number) {
    return await this.casesService.getFullCaseById(caseId);
  }

  // 🔄 9. Update case status
  @Put(':caseId/status')
  async updateStatus(
    @Param('caseId', ParseIntPipe) caseId: number,
    @Body() body: { status: string }
  ) {
    return await this.casesService.updateCaseStatus(caseId, body.status);
  }
}
