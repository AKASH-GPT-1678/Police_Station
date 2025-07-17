import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FIR } from './entities/fir.entity';
import { Repository } from 'typeorm';
import { Incident } from './entities/inciden.entity';
import { CreateFirDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintService {

  constructor(
    @InjectRepository(FIR) private firRepository: Repository<FIR>,
    @InjectRepository(Incident) private incidentRepository: Repository<Incident>,



  ) { }


  async registerComplaint(@Body() createFirDto: CreateFirDto) {

    const incident = await this.incidentRepository.save(createFirDto.incident);

    const fir = new FIR();
    fir.incident = incident;
    fir.firNo = createFirDto.firNo;
    fir.policeStation = createFirDto.policeStation;
    fir.dateOfFiling = createFirDto.dateOfFiling;
    fir.complainantName = createFirDto.complainantName;
    fir.complainantAge = createFirDto.complainantAge;
    fir.complainantGender = createFirDto.complainantGender;
    fir.modeOfComplaint = createFirDto.modeOfComplaint;
    fir.complainantAddress = createFirDto.complainantAddress;
    fir.complainantContact = createFirDto.complainantContact;
    fir.accused = createFirDto.accused;
    fir.victim = createFirDto.victim;
    fir.sectionsApplied = createFirDto.sectionsApplied;

    if (createFirDto.modeOfComplaint == 'Online') {
      fir.isVerified = false;


    } else {
      fir.isVerified = true;
    }






    return await this.firRepository.save(fir);


  };





}

