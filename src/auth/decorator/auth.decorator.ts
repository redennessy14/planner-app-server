import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../guard/jwt.guard'

export const Auth = () => UseGuards(JwtAuthGuard)
