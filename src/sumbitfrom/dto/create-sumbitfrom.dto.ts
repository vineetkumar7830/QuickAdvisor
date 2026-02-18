import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateSumbitfromDto {

 // @IsString()
 // @IsNotEmpty()
  //fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  telephoneNumber?: string;

 // @IsOptional()
 // @IsString()
  //location?: string;

  // ✅ Dynamic now (No enum restriction)
  //@IsOptional()
 // @IsString()
 // selectArea?: string;

  // ✅ Dynamic now (No enum restriction)
 // @IsOptional()
 // @IsString()
  //helpType?: string;

  @IsOptional()
  @IsString()
  message?: string;

 // @IsBoolean()
//  consent: boolean;
}
