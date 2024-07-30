import { Module } from '@nestjs/common';
import { RepositoriesModule } from '/infrastructure/repository/repositories.module';
import { MemberController } from '/application/controller/member.controller';
import { MEMBER_SERVICE } from '/common/shared/common';
import { MemberService } from '/application/services/member/member.service';

@Module({
  imports: [RepositoriesModule],
  controllers: [MemberController],
  providers: [
    {
      provide: MEMBER_SERVICE,
      useClass: MemberService,
    },
  ],
  exports: [MEMBER_SERVICE],
})
export class MemberModule {}
