import { CommonService, ICommonService } from '../services/common/request'

class CommonInteractor {
  public static getInstance() {
    return this._instance
  }

  private static _instance = new CommonInteractor(new CommonService())

  // private _quotes: any

  constructor(private _service: ICommonService) {}

  public async getJokeList() {
    try {
      return await this._service.getJokeList()
    } catch (error) {
      throw error
    }
  }
}

export default CommonInteractor.getInstance()
