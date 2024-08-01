import { Module, Provider } from '@nestjs/common';
import { MemberService } from './services/member.service';
import { MemberController } from './controllers/http/member.controller';
import { MemberRepository } from './database/member.repository';
import { MEMBER_REPOSITORY } from '@src/common/shared/common';
import { PrismaModule } from '@src/infrastructure/persistence/prisma/prisma.module';
import { MemberMapper } from './member.mapper';

const repositories: Provider[] = [
  {
    provide: MEMBER_REPOSITORY,
    useClass: MemberRepository,
  },
];

const mappers: Provider[] = [
  MemberMapper,
];

@Module({
  imports: [PrismaModule],
  controllers: [MemberController],
  providers: [
    MemberService,
    ...repositories,
    ...mappers,
  ],
  exports: [],
})

export class MemberModule {}
