import { PartialType } from '@nestjs/mapped-types';
import { CreateCaseDto } from '../entities/create-case.dto';

export class UpdateCaseDto extends PartialType(CreateCaseDto) {}
