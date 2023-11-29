import { Injectable } from '@nestjs/common';
import { getGithubUser } from '@app/comm';
import { getGithubToken } from '@app/comm';
import * as querystring from 'querystring';

@Injectable()
export class OAuthService {
  async getUserToken(code: string) {
    const res: any = await getGithubToken({ code });
    const params = querystring.parse(res);
    console.log('解析后的', params);

    return this.getOathUser(params.access_token as string);
  }

  async getOathUser(token: string) {
    return getGithubUser({ token });
  }
}
