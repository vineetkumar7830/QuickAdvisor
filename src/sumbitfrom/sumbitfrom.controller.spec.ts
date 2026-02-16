import { Test, TestingModule } from '@nestjs/testing';
import { SumbitfromController } from './sumbitfrom.controller';
import { SumbitfromService } from './sumbitfrom.service';

describe('SumbitfromController', () => {
  let controller: SumbitfromController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumbitfromController],
      providers: [SumbitfromService],
    }).compile();

    controller = module.get<SumbitfromController>(SumbitfromController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
