import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [TwitterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
