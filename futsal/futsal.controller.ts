import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FutsalService } from './futsal.service';
import { CreateFutsalDto } from './dto/create-futsal.dto';

@Controller('futsals')
export class FutsalController {
  constructor(private futsalService: FutsalService) {}

  @Post()
  createFutsal(@Body() createFutsalDto: CreateFutsalDto) {
    return this.futsalService.createFutsal(createFutsalDto);
  }

  @Get(':id')
  getFutsal(@Param('id') id: string) {
    return this.futsalService.getFutsal(+id);
  }
}
