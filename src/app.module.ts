import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // to load .env
    MongooseModule.forRoot(process.env.MONGO_URI!),
    UsersModule, // apka users module
  ],
})
export class AppModule {}
