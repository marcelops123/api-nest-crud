/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '200.98.161.31',
      port: 3306,
      username: 'marcelo',
      password: '1234',
      database: 'api',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule { }
