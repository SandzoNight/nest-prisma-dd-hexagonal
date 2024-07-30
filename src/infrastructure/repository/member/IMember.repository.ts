import { member } from '@prisma/client';
import { CreateMemberSchema } from 'src/domain/models/schema/member.schema';
import { CreateMemberResponseDto } from 'src/application/dtos/member.dtos';

export interface IMemberRepository {
  findAll(): Promise<member[]>;
  findById(memberId: string): Promise<member | null>;
  create(member: CreateMemberSchema): Promise<CreateMemberResponseDto>;
  update(id: number, member: Partial<member>): Promise<member>;
}
