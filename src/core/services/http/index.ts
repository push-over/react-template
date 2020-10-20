import axios, { AxiosRequestConfig } from 'axios'

interface ResponseData<T> {
  data: T
}

const DEFAULT_OPTIONS = {
  baseURL: 'https://api.apiopen.top',
  timeout: 3000,
}

const instance = axios.create(DEFAULT_OPTIONS)

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    return response
  },
  thrown => {
    return Promise.reject(thrown)
  }
)

export default async function <T = any>(options: AxiosRequestConfig): Promise<ResponseData<T>> {
  const requestOptions = { ...options }

  try {
    const { data } = await instance.request<ResponseData<T>>(requestOptions)

    return data
  } catch (err) {
    throw err
  }
}
