import { Module } from '@nestjs/common';
import { MemberRepository } from './member/member.repository';
import { PrismaService } from '/infrastructure/persistence/prisma/prisma.service';
import { MEMBER_REPOSITORY } from '/common/shared/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: MEMBER_REPOSITORY,
      useClass: MemberRepository,
    },
  ],
  exports: [MEMBER_REPOSITORY],
})
export class RepositoriesModule {}
