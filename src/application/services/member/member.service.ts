import { Inject, Injectable } from '@nestjs/common';
import { MEMBER_REPOSITORY } from 'src/common/shared/common';
import { IMemberRepository } from 'src/infrastructure/repository/member/IMember.repository';
import { CreateMemberResponseDto, GetMemberResponseDto } from 'src/application/dtos/member.dtos';
import { CreateMemberSchema } from 'src/domain/models/schema/member.schema';
import { IMemberServices } from './IMember.services';

@Injectable()
export class MemberService implements IMemberServices {
  constructor(
    @Inject(MEMBER_REPOSITORY)
    private readonly _memberRepo: IMemberRepository,
  ) {}

  async findById(id: string): Promise<GetMemberResponseDto> {
    const member: any = await this._memberRepo.findById(id);
    return member ? GetMemberResponseDto.fromEntity(member) : null;
  }

  async createMember(data: CreateMemberSchema): Promise<CreateMemberResponseDto> {
    const createMember = await this._memberRepo.create(data);
    return CreateMemberResponseDto.fromEntity(createMember);
  }
}
