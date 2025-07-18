import { Inject, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FIR } from 'src/complaint/entities/fir.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {

  constructor(@InjectRepository(FIR) private firRepository: Repository<FIR>) {


    



  }

  async getMonthlyStats() {

    try {

      const firCount = await this.firRepository.countBy({
        dateOfFiling: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      });

      return { firCount };
      
    } catch (error) {
      
      console.log(error);
      
    }

  }

}
