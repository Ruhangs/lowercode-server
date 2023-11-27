import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'ruhangs' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '阮杭生' })
  username: string;

  @ApiProperty({ example: 'ruhangs' })
  enName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: '' })
  email: string;

  @ApiProperty({ example: '' })
  avatar?: string;

  @ApiProperty({ example: '' })
  mobile?: string;

  @ApiProperty({ example: '' })
  departmentId?: number;
}
