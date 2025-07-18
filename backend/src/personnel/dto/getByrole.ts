import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PersonnelRole } from "../entities/personnel.entity";


export class getByRoleDto {


    @IsString()
    @IsNotEmpty()
    @IsEnum(PersonnelRole)
    role: PersonnelRole
}