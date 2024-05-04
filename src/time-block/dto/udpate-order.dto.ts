import { IsArray, IsString } from 'class-validator'

export class updateOrderDto {
	@IsArray()
	@IsString({ each: true })
	ids: string[]
}
