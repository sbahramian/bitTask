import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class OrderDto {
  @IsString()
  symbol: string;

  @IsNumber()
  qty: string;

  @IsString()
  side: string;

  @IsString()
  type: string;

  @IsNumber()
  price: string;
}
