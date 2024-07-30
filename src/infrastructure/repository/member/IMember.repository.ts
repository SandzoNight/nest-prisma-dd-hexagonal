import { member } from '@prisma/client';
import { CreateMemberSchema } from '/domain/models/schema/member.schema';
import { CreateMemberResponseDto } from '/application/dtos/member.dtos';

export interface IMemberRepository {
  findAll(): Promise<member[]>;
  findById(memberId: string): Promise<member | null>;
  create(member: CreateMemberSchema): Promise<CreateMemberResponseDto>;
  update(id: number, member: Partial<member>): Promise<member>;
}
