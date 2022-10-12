
import {CallHandler, ExecutionContext, NestInterceptor, UseInterceptors} from '@nestjs/common'
import { Observable,map } from 'rxjs';
import {plainToClass} from 'class-transformer'
import { TestTodo } from './testTDO';
interface ClassConstructor{
    new (...args:any[]):{}
}

export function Serialize(dto:ClassConstructor){
    return UseInterceptors(new SerializeInterceptor(dto))
}
export class SerializeInterceptor implements NestInterceptor{
    constructor(private dto:ClassConstructor ){}
    intercept(context: ExecutionContext, next: CallHandler<any>)
    : Observable<any> | Promise<Observable<any>> {
        // console.log('Before Request' + context);

        return next.handle().pipe(
            map((data:any)=>{
                
                return plainToClass(TestTodo, data, {
                    excludeExtraneousValues:true
                })
            })
        )
        
    }

}

// import { plainToClass } from "class-transformer";


// interface ClassConstructor{
//     new(...args:any[]):{}
// }
// export function Serialize(dto:ClassConstructor){
//     return UseInterceptors(new Serializeinterceptor(dto))
// }
// export class Serializeinterceptor implements NestInterceptor{
//      constructor(private dto:any){}
//     intercept(context: ExecutionContext, next: CallHandler):Observable<any>{
//         // Run  before Request is Hnadled
//         // console.log('B4 Handler', context);
//         return next.handle().pipe( 
//             // tap(data=>console.log(data)),
//             map((data:any)=>{
//                 return plainToClass(this.dto,data,{
//                     excludeExtraneousValues:true   
//                 })
//             })
          
//         )
//     }
// }