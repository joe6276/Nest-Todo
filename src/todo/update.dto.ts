import { IsString,IsOptional  } from "class-validator"

export class UpdatedTodo{
    @IsString()
    @IsOptional()
    title:string

    @IsString()
    @IsOptional()
    description:string
}