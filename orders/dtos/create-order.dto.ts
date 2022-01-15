import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateOrderDto {
  @IsString()
  symbol: string;

  @IsString()
  qty: string;

  @IsString()
  side: string;

  @IsString()
  type: string;

  @IsNumber()
  price: string;

  @IsString()
  timeInForce: string;
}
