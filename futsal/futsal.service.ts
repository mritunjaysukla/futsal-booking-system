import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFutsalDto } from './dto/create-futsal.dto';

@Injectable()
export class FutsalService {
  constructor(private prisma: PrismaService) {}

  async createFutsal(createFutsalDto: CreateFutsalDto) {
    return this.prisma.futsal.create({ data: createFutsalDto });
  }

  async getFutsal(id: number) {
    return this.prisma.futsal.findUnique({
      where: { id },
      include: { images: true, reviews: true },
    });
  }
}
