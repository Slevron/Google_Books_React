import { AxiosRequestConfig } from "axios";
import { NameAPI } from "../enum/NameApi";

interface IAxiosConfig {
  name: string;
  config: AxiosRequestConfig;
}

export const AxiosConfig: IAxiosConfig[] = [
  {
    name: NameAPI.Google_Book,
    config: {
      baseURL: 'https://www.googleapis.com/books/v1',
    }
  }
]
