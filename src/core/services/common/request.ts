import http from '../http';

export interface ICommonService {
  getJokeList(): Promise<any>;
}

export class CommonService implements ICommonService {
  public async getJokeList(): Promise<any> {
    return await http({
      method: 'get',
      url: '/getJoke?page=1&count=10&type=video',
    })
  }
}
