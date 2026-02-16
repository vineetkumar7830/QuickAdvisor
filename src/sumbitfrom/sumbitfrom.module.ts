import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SumbitfromController } from './sumbitfrom.controller';
import { SumbitfromService } from './sumbitfrom.service';
import {
  Sumbitfrom,
  SumbitfromSchema,
} from './entities/sumbitfrom.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sumbitfrom.name, schema: SumbitfromSchema },
    ]),
  ],
  controllers: [SumbitfromController],
  providers: [SumbitfromService],
})
export class SumbitfromModule {}
