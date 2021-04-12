import { Module } from '@nestjs/common';
import { TwitterModule } from '../twitter/twitter.module';
import { WatsonController } from './watson.controller';


@Module({
  imports: [TwitterModule],
  controllers: [WatsonController],
  providers: [],
})
export class WatsonModule {}
