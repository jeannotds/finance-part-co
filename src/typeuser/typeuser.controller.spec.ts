import { Test, TestingModule } from '@nestjs/testing';
import { TypeuserController } from './typeuser.controller';

describe('TypeuserController', () => {
  let controller: TypeuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeuserController],
    }).compile();

    controller = module.get<TypeuserController>(TypeuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
