import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TwitterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
