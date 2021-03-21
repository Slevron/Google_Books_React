import { AxiosStatic } from "axios";
import { 
  BookParamDownload, 
  BookParamFilter, 
  BookParamLibraryRestrict, 
  BookParamOrderBy, 
  BookParamPrintType,
  BookParamProjection
} from "../enum/GoogleBookApi";
import { NameAPI } from "../enum/NameApi";
import { IBook } from "../models/Book";
import { AxiosInstances } from "../utils/AxiosInstances";

export interface IGoogleBooksApiParams {
  q?: string;
  download?: BookParamDownload;
  filter?: BookParamFilter;
  langRestrict?: string;
  libraryRestrict?: BookParamLibraryRestrict;
  maxResults?: number;
  orderBy?: BookParamOrderBy;
  partner?: string;
  printType?: BookParamPrintType;
  projection?: BookParamProjection;
  showPreorders?: boolean;
  source?: string;
  startIndex?: number;
}

export interface IGetListResponse {
  kind: string;
  items: IBook[]; 
  totalItems: number;
}

export interface IBooksEndpoint {
  getList: (
    paramsRequest: IGoogleBooksApiParams
  ) => Promise<IGetListResponse>
}

export const BooksEndpoint = (forceInstance?: AxiosStatic): IBooksEndpoint => {
  const INSTANCE = AxiosInstances.find(NameAPI.Google_Book) || forceInstance;

  const getList = async (
    paramsRequest: IGoogleBooksApiParams
  ): Promise<IGetListResponse> => {
    try {
      const response = await INSTANCE?.get('/volumes', { 
        params: paramsRequest,
      });

      return response?.data;
    } catch (error) {
      return error;
    }
  }

  return {
    getList,
  }
}
