import { Injectable } from '@nestjs/common';
import { member } from '@prisma/client';
import { IMemberRepository } from './IMember.repository';
import { PrismaService } from '/infrastructure/persistence/prisma/prisma.service';
import { CreateMemberSchema } from '/domain/models/schema/member.schema';

@Injectable()
export class MemberRepository implements IMemberRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<member[]> {
    return this.prisma.member.findMany();
  }

  async findById(memberId: string): Promise<member | null> {
    return this.prisma.member.findUnique({ where: { memberId: memberId } });
  }

  async create(data: CreateMemberSchema): Promise<member> {
    const memberId = Math.floor(10000 + Math.random() * 90000).toString();
    return this.prisma.member.create({
      data: {
        ...data,
        memberId,
      },
    });
  }

  async update(id: number, member: Partial<member>): Promise<member> {
    return this.prisma.member.update({ where: { id }, data: member });
  }
}
