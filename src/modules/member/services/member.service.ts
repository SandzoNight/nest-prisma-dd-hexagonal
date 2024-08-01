import { Inject, Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from '../database/member.repository.port';
import { MemberEntity } from '../domain/member.entity';
import { CreateMemberProps } from '../domain/member.types';
import { AggregateID } from '@src/libs/ddd';
import { MEMBER_REPOSITORY } from '@src/common/shared/common';

@Injectable()
export class MemberService {
  constructor(
    @Inject(MEMBER_REPOSITORY)
    private readonly memberRepo: MemberRepositoryPort,
  ) {}

  async findByCode(code: string): Promise<MemberEntity> {
    const member = await this.memberRepo.findByCode(code);
    return member;
  }

  async create(data: CreateMemberProps): Promise<AggregateID> {
    // const member: MemberEntity = await this.memberRepo.create(data);
    const member = MemberEntity.create(data);
    
    await this.memberRepo.insert(member);
    
    return member.id;
  }
}
