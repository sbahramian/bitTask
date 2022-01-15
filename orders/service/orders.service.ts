import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getSignature } from '../../utils/encryption';
import { getParams } from '../../utils/params';
import bybit from '../../config/bybit';

const API_KEY = bybit.key;
const PRIVATE_KEY = bybit.secret;

@Injectable()
export class OrdersService {

    /**
     * 
     * @dev get list open sopt orders
     * @returns list orders
     */
    async listOrder() {   
        const params = {
            api_key: API_KEY,
            timestamp: Date.now()
        };
        var sign = getSignature(params, PRIVATE_KEY);  
        const postParams = getParams(params, sign);
        try {
            const result =  await axios.delete('https://api.bybit.com/spot/v1/open-orders', {params: postParams}).then((response) => response.data);
            return result;
        } catch (error) {
            throw new Error(error);
        }         
    }
    
    /**
     * 
     * @dev get order by id
     * @param orderId 
     * @returns 
     */
    async getOrder(orderId: any) {  
        const params = {
            api_key: API_KEY,
            'orderId': orderId,
            timestamp: Date.now()
        };
        var sign = getSignature(params, PRIVATE_KEY);  
        const postParams = getParams(params, sign);
        try {
            const result =  await axios.get('https://api.bybit.com/spot/v1/order', {params: postParams}).then((response) => response.data);
            return result;
        } catch (error) {
            throw new Error(error);
        }     
    }

    /**
     * 
     * @dev create new and open order in spot
     * @param order 
     * @returns 
     */
    async openOrder(order: any) {
        const params = {
            api_key: API_KEY,
            side: order.side,
            symbol: order.symbol,
            type: order.type,
            qty: order.qty,
            price: order.price,
            timeInForce: order.timeInForce,
            timestamp: Date.now()
        };
        var sign = getSignature(params, PRIVATE_KEY);  
        const postParams = getParams(params, sign);
        try {
            const result =  await axios.post('https://api.bybit.com/spot/v1/order', postParams).then((response) => response.data);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @dev cencel order by id
     * @param orderId 
     * @returns 
     */
    async cancelOrder(orderId: string) {
        const params = {
            api_key: API_KEY,
            'orderId': orderId,
            timestamp: Date.now()
        };
        var sign = getSignature(params, PRIVATE_KEY);  
        const postParams = getParams(params, sign);
        try {
            const result =  await axios.delete('https://api.bybit.com/spot/v1/order', {params: postParams}).then((response) => response.data);
            return result;
        } catch (error) {
            throw new Error(error);
        }   
    }

}
