import { Controller, Post, Body } from '@nestjs/common';
import { SumbitfromService } from './sumbitfrom.service';
import { CreateSumbitfromDto } from './dto/create-sumbitfrom.dto';

@Controller('sumbitfrom')
export class SumbitfromController {
  constructor(private readonly service: SumbitfromService) {}

  @Post()
  create(@Body() dto: CreateSumbitfromDto) {
    return this.service.create(dto);
  }
}
