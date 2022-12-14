import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule,TypeOrmModule.forRoot({
     type:'mssql',
    host:'localhost',
    port:1433,
    username: 'sa',
    password:'Amazing@22',
    database:'MyTestDB',
    synchronize:true,
    entities:[Todo],
    extra:{
      trustServerCertificate: true,
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
