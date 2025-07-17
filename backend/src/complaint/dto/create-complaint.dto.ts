
import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ModeofComplaint } from '../entities/fir.entity';
import { CreateIncidentDto } from './create-incident';

export class CreateFirDto {
  @IsString()
  @IsNotEmpty()
  firNo: string;

  @IsString()
  @IsNotEmpty()
  policeStation: string;

  @IsString()
  @IsNotEmpty()
  dateOfFiling: string;

  @IsString()
  @IsNotEmpty()
  complainantName: string;

  @IsNumber()
  complainantAge: number;

  @IsString()
  complainantGender: string;

  @IsEnum(ModeofComplaint)
  modeOfComplaint: ModeofComplaint;

  @IsString()
  complainantAddress: string;

  @IsString()
  complainantContact: string;

  @ValidateNested()
  @Type(() => CreateIncidentDto)
  incident: CreateIncidentDto;

  @IsString()
  accused: string;

  @IsString()
  victim: string;

  @IsArray()
  @IsString({ each: true })
  sectionsApplied: string[];

}
