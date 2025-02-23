import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async createBooking(createBookingDto: CreateBookingDto) {
    const { futsalId, startTime, endTime } = createBookingDto;

    const conflictingBookings = await this.prisma.booking.findMany({
      where: {
        futsalId,
        OR: [{ startTime: { lt: endTime }, endTime: { gt: startTime } }],
      },
    });

    if (conflictingBookings.length > 0) {
      throw new ConflictException('Time slot already booked');
    }

    return this.prisma.booking.create({ data: createBookingDto });
  }

  async cancelBooking(id: number) {
    const booking = await this.prisma.booking.findUnique({ where: { id } });
    if (!booking) throw new NotFoundException('Booking not found');

    return this.prisma.booking.update({
      where: { id },
      data: { status: 'Cancelled' },
    });
  }
}
