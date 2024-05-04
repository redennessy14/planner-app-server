import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
	@IsOptional()
	name: string

	@IsBoolean()
	@IsOptional()
	isComplated?: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	priority?: Priority
}
