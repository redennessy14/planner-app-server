import {
	Controller,
	Get,
	UsePipes,
	ValidationPipe,
	HttpCode,
	Put,
	Body
} from '@nestjs/common'
import { UserService } from './task.service'
import { CurrentUser } from 'src/auth/decorator/user.decorator'
import { Auth } from 'src/auth/decorator/auth.decorator'
import { UserDto } from './task.dto'

@Controller('user/profile')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@Auth()
	async profile(@CurrentUser('id') id: string) {
		return this.userService.getProfile(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put()
	@Auth()
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}
}
