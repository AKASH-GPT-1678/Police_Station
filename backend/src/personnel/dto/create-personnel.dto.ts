import { IsString, IsNotEmpty, IsNumber, IsEmail, IsEnum, isEnum } from 'class-validator';
import { PersonnelRole } from '../entities/personnel.entity'; // Adjust path as needed


enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}

export class CreatePersonnelDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    @IsNotEmpty()
    @IsEnum(Gender)
    gender: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    contact: string;

    @IsEmail()
    email: string;

    @IsEnum(PersonnelRole)
    role: PersonnelRole;

    @IsString()
    @IsNotEmpty()
    badgeNumber: string;

    @IsString()
    @IsNotEmpty()
    station: string;
}
