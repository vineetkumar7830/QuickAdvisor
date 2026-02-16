import { Test, TestingModule } from '@nestjs/testing';
import { SumbitfromService } from './sumbitfrom.service';

describe('SumbitfromService', () => {
  let service: SumbitfromService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumbitfromService],
    }).compile();

    service = module.get<SumbitfromService>(SumbitfromService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
