import { Expose } from "class-transformer"

export class TestTodo{
    @Expose()
    title:string

    @Expose()
    description:string
}