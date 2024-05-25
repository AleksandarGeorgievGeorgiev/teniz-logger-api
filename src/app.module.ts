import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV ? `./environment/.env.${ENV}` : `./environment/.env`,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}