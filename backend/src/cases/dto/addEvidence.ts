import { IsEnum, IsNotEmpty, IsString } from 'class-validator';



enum CaseType {
    
  CIVIL = 'civil',
  CRIMINAL = 'criminal',
  FAMILY = 'family',
  CONSTITUTIONAL = 'constitutional',
  LABOUR = 'labour'


}
export class AddEvidenceDto {
  @IsNotEmpty()
  caseId: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(CaseType)
  type: CaseType;

  @IsNotEmpty()
  @IsString()
  imgUrl: string;
}
