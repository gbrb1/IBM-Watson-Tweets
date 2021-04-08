import { Module } from '@nestjs/common';
import { WatsonController } from './watson.controller';
import { WatsonService } from './watson.service';

@Module({
  imports: [],
  controllers: [WatsonController],
  providers: [WatsonService],
})
export class WatsonModule {}