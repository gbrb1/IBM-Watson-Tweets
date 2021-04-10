import { Module } from '@nestjs/common';
import { TwitterModule } from '../twitter/twitter.module';
import { WatsonController } from './watson.controller';
import { WatsonService } from './watson.service';

@Module({
  imports: [TwitterModule],
  controllers: [WatsonController],
  providers: [WatsonService],
})
export class WatsonModule {}
