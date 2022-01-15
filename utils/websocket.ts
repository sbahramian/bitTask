import { WebsocketClient, LotSizeFilter } from 'bybit-api';
import bybit from '../config/bybit';

const API_KEY = bybit.key;
const PRIVATE_KEY = bybit.secret;

const wsClient = new WebsocketClient({
  livenet: true,
  market: 'spot',
  key: API_KEY,
  secret: PRIVATE_KEY,
});

/**
 * @dev get realtime data frin bybit websocket
 */
const websocket = () => {

  wsClient.on('update', (data) => {
    console.log('raw message received ', JSON.stringify(data, null, 2));
  });
  
  wsClient.on('open', (data) => {
    // console.log('connection opened open:', data.wsKey);
    wsClient.subscribePublicSpotV1Kline('ETHUSDT', '1m');
    // wsClient.subscribePublicSpotOrderbook('ETHUSDT', 'full');
  });
  
  wsClient.on('response', (data) => {
    // console.log('log response: ', JSON.stringify(data, null, 2));
  });
  
  wsClient.on('reconnect', ({ wsKey }) => {
    // console.log('ws automatically reconnecting.... ', wsKey);
  });
  
  wsClient.on('reconnected', (data) => {
    // console.log('ws has reconnected ', data?.wsKey );
  });

};

export default websocket;