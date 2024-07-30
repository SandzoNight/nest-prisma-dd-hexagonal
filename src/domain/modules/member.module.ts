import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/repository/repositories.module';
import { MemberController } from 'src/application/controller/member.controller';
import { MEMBER_SERVICE } from 'src/common/shared/common';
import { MemberService } from 'src/application/services/member/member.service';

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
