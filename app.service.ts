import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {"name":"BitTask","version":"0.01","host":"https://localhost:3000","basePath":"/v1","status":true};
  }
}
