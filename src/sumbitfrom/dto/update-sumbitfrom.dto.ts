import { PartialType } from '@nestjs/mapped-types';
import { CreateSumbitfromDto } from './create-sumbitfrom.dto';

export class UpdateSumbitfromDto extends PartialType(CreateSumbitfromDto) {}
