

import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from 'class-validator';
import { PersonRole } from '../entities/people.entity';

export class AddPersonDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z\s]+$/, { message: 'Name must contain only letters and spaces' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(12, 12, { message: 'Aadhar number must be exactly 12 digits' })
  @Matches(/^[0-9]{12}$/, { message: 'Aadhar number must contain only digits' })
  aadharNumber: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 10, { message: 'Contact number must be exactly 10 digits' })
  @Matches(/^[0-9]{10}$/, { message: 'Contact number must contain only digits' })
  contactNumber: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsNotEmpty()
  @IsEnum(PersonRole, { message: 'Role must be either suspect, witness, or victim' })
  role: PersonRole;

  @IsNotEmpty()
  @IsNumber()
  caseId: number
}
