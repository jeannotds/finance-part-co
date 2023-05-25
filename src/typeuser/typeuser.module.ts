import { Module } from '@nestjs/common';
import { TypeuserController } from './typeuser.controller';
import { TypeuserService } from './typeuser.service';

@Module({
  controllers: [TypeuserController],
  providers: [TypeuserService],
})
export class TypeuserModule {}
