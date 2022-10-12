import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule,TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[Todo],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
