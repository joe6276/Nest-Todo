import {Entity,PrimaryGeneratedColumn,Column, DeleteDateColumn} from 'typeorm'


@Entity()
export class Todo{
@PrimaryGeneratedColumn()
id:string

@Column()
title:string

@Column()
description:string

@DeleteDateColumn()

deletedAt :Date

}