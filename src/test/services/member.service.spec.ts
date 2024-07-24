import { Test, TestingModule } from '@nestjs/testing';
import { IMemberServices } from 'src/application/services/member/IMember.services';
import { MEMBER_REPOSITORY } from 'src/common/shared/common';
import { IMemberRepository } from 'src/infrastructure/repository/member/IMember.repository';
import { mockMemberRepository } from '../mock-fn';
import { MemberService } from 'src/application/services/member/member.service';
import { CreateMemberResponseDto, GetMemberResponseDto } from 'src/application/dtos/member.dtos';

describe('MemberService', () => {
  let service: IMemberServices;
  let repository: IMemberRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
        { provide: MEMBER_REPOSITORY, useValue: mockMemberRepository }, // Mock repository
      ],
    }).compile();

    service = module.get<IMemberServices>(MemberService);
    repository = module.get<IMemberRepository>(MEMBER_REPOSITORY);
  });

  describe('findById', () => {
    it('should return a member if found', async () => {
      const memberId = '25552';
      const member = {
        id: 1,
        memberId: '25552',
        name: 'Wiriya Au',
        email: 'wiriya.a@kingpower.com',
        age: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(repository, 'findById').mockResolvedValue(member);

      const result = await service.findById(memberId);
      expect(result).toEqual(GetMemberResponseDto.fromEntity(member));
    });

    it('should return null if member not found', async () => {
      const memberId = 'test-id';
      jest.spyOn(repository, 'findById').mockResolvedValue(null);

      const result = await service.findById(memberId);
      expect(result).toBeNull();
    });
  });

  describe('createMember', () => {
    it('should return a create member', async () => {
      const memberId = '25552';
      const createMemberRequest = {
        name: 'Wiriya Au',
        email: 'wiriya.a@kingpower.com',
        age: '30',
      };
      const createMemberResponse = {
        memberId: memberId,
        name: 'Wiriya Au',
        email: 'wiriya.a@kingpower.com',
        age: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(repository, 'create').mockResolvedValue(createMemberResponse);

      const result = await service.createMember(createMemberRequest);
      expect(result).toEqual(CreateMemberResponseDto.fromEntity(createMemberResponse));
    });
  });
});
