import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterModule } from './twitter/twitter.module';
import { WatsonModule } from './Watson/watson.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TwitterModule, WatsonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
