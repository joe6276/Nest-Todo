import { Body, Controller, Param,Post,Get, Patch, Delete, UseInterceptors} from '@nestjs/common';
import { TestTodo } from './testTDO';
import { TodoDTO } from './Todo.dto';
import { Serialize, SerializeInterceptor } from './todo.interceptor';
import { TodoService } from './todo.service';
import { UpdatedTodo } from './Update.dto';
@Serialize(TestTodo)
@Controller('todo')
export class TodoController {
constructor(private todoService:TodoService){}

@Get()
getTodos(){
    return this.todoService.getTodos()
}


@Get('/:id')
getTodo(@Param('id') id:string){
    return this.todoService.getTodo(id)
}

@Post()
createTodo(@Body() todo:TodoDTO){
    return this.todoService.createTodo(todo)
}

@Patch('/:id')
updateTodo(@Body() todo:UpdatedTodo, @Param('id') id:string){
this.todoService.updateTodo(id,todo)
}
@Delete('/:id')
deleteTodo(@Param('id') id:string){
return this.todoService.deleteTodo(id)
}

}
