import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Member } from '/domain/models/entity/member.entity';

export class GetMemberResponseDto {
  @ApiProperty({ example: '1234', description: 'Member Id' })
  readonly memberId: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
  readonly name: string;

  @ApiProperty({
    example: 'john.doe@mail.com',
    description: 'The email address of the member',
  })
  readonly email: string;

  @ApiProperty({ example: 'John Doe', description: 'The age of the member' })
  @IsOptional()
  readonly age?: string;

  @ApiProperty({ example: '2024-07-10 03:53:29.945', description: 'Created DateTime' })
  readonly createdAt: Date;

  static fromEntity(member: Member): GetMemberResponseDto {
    return {
      memberId: member.memberId,
      name: member.name,
      email: member.email,
      age: member.age,
      createdAt: member.createdAt,
    };
  }
}

export class CreateMemberResponseDto {
  @ApiProperty({ example: '1234', description: 'Member Id' })
  @IsOptional()
  readonly memberId?: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the member' })
  readonly name: string;

  @ApiProperty({
    example: 'john.doe@mail.com',
    description: 'The email address of the member',
  })
  readonly email: string;

  @ApiProperty({ example: '28', description: 'The age of the member' })
  readonly age?: string;

  static fromEntity(member: Member): CreateMemberResponseDto {
    return {
      memberId: member.memberId,
      name: member.name,
      email: member.email,
      age: member.age,
    };
  }
}
