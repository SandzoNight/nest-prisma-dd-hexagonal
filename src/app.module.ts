import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from './modules/member/member.module';
import { PrismaModule } from './infrastructure/persistence/prisma/prisma.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ContextInterceptor } from './libs/application/context/ContextInterceptor';
import { ExceptionInterceptor } from './libs/application/interceptors/exception.interceptor';
import { RequestContextModule } from 'nestjs-request-context';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
]
@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    RequestContextModule,
    MemberModule,
    PrismaModule,
  ],
  providers: [
    ...interceptors
  ],
})
export class AppModule {}
