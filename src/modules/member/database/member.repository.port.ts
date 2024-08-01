import { member } from '@prisma/client';
import { RepositoryPort } from '@libs/ddd';
import { MemberEntity } from '../domain/member.entity';

export interface MemberRepositoryPort extends RepositoryPort<MemberEntity> {
  findAll(): Promise<MemberEntity[]>;
  findByCode(code: string): Promise<MemberEntity | null>;
  // create(member: CreateMemberSchema): Promise<CreateMemberResponseDto>;
  update(id: string, member: Partial<member>): Promise<member>;
}
