import { CreateMemberResponseDto, GetMemberResponseDto } from '/application/dtos/member.dtos';
import { CreateMemberSchema } from '/domain/models/schema/member.schema';

export interface IMemberServices {
  findById(memberId: string): Promise<GetMemberResponseDto>;
  createMember(data: CreateMemberSchema): Promise<CreateMemberResponseDto>;
}
