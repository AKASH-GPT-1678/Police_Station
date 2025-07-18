import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCaseDto {
  @IsString()
  @IsNotEmpty()
  title: string;



  @IsString()
  @IsNotEmpty()
  firId : string;



  @IsString()
  @IsNotEmpty()
  adminSignature: string;




  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  status: string;  // e.g., 'open', 'closed', 'pending'
}
