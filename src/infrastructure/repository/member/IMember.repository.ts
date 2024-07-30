import { member } from '@prisma/client';
import { CreateMemberResponseDto } from 'src/application/dtos/member.dtos';
import { CreateMemberSchema } from '/domain/models/schema/member.schema';

export interface IMemberRepository {
  findAll(): Promise<member[]>;
  findById(memberId: string): Promise<member | null>;
  create(member: CreateMemberSchema): Promise<CreateMemberResponseDto>;
  update(id: number, member: Partial<member>): Promise<member>;
}
