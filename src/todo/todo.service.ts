import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { TodoDTO } from './Todo.dto';
import { Todo } from './todo.entity';
import { UpdatedTodo } from './Update.dto';
@Injectable()
export class TodoService {
constructor(@InjectRepository(Todo) private repo: Repository<Todo>){}
    getTodos(){
    return this.repo.find()
    }
    createTodo(todo:TodoDTO){
        const todoinstance= this.repo.create(todo)
        return this.repo.save(todoinstance)
    }


    async getTodo(id:string){
     const todo=await this.repo.findOne({where:{id}})
     if(!todo){
        throw new NotFoundException('Todo Not Found')
     }
     return todo
    }
    async updateTodo(id:string, updatedTodo:Partial<UpdatedTodo>){
       const todo=await this.repo.findOne({where:{id}})
     if(!todo){
        throw new NotFoundException('Todo Not Found')
     }
        await this.repo.update(id,updatedTodo)
    }

   async deleteTodo(id:string){
         await this.getTodo(id)
        return this.repo.softDelete({id})
    }
}
