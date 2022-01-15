import { Controller, Get, Post, Delete, Put, Body, Param, NotFoundException } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';
import { CreateOrderDto } from '../dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Get()
    async getOrders() {
        const order = await this.ordersService.listOrder();
        return order;
    }
    @Get('/:id')
    async getOrder(@Param('id') id: string) {
        const order = await this.ordersService.getOrder(id);
        return order;
    }

    @Post()
    async newOrder(@Body() body: CreateOrderDto) {
        const order = await this.ordersService.openOrder(body);
        return order;
    }

    @Delete('/:id')
    async deleteOrder(@Param('id') id: string) {
        const order = await this.ordersService.cancelOrder(id);
        return order;
    }

}
