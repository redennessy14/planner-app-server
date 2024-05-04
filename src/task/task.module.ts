import { Module } from '@nestjs/common'
import { UserService } from './task.service'
import { UserController } from './task.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
	exports: [UserService]
})
export class UserModule {}
