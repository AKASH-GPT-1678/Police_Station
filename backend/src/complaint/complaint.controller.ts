import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ComplaintService } from './complaint.service';
import { CreateFirDto } from './dto/create-complaint.dto';


@Controller('complaint')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {


    

  }
  
    @Post('register')
    async addComplaint(@Body() addEvidenceDto: CreateFirDto) {
      


      return await this.complaintService.registerComplaint(addEvidenceDto);
    };



  @Delete('delete/:id')
  async deleteFir(@Param('id') id: string) {
    return await this.complaintService.deleteFir(id);
  };

  

  

 
}
