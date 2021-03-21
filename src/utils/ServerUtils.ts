import { useContext, useState } from "react";
import { booksContext } from "../context/books/Context";
import { BooksEndpoint, IGoogleBooksApiParams } from "../endpoints/BooksEndpoint";
import { IBook } from "../models/Book";

interface IServerUtils {
  books: IBook[],
  loading: boolean,
  callGetList: (params: IGoogleBooksApiParams, 
    mergeData?: boolean) => Promise<void>
}
export const ServerUtils = (): IServerUtils => {
  const { 
    books, 
    setCurrentBooks, 
    searchBook, 
    setCurrentSearchBook 
  } = useContext(booksContext);
  const [ loading, setLoading ] = useState<boolean>(false);
  const { getList } = BooksEndpoint();

  const callGetList = async (
    params: IGoogleBooksApiParams, 
    mergeData?: boolean
  ): Promise<void> => {
    setLoading(true);
    
    if(params.q) {
      setCurrentSearchBook(params.q)
    } else {
      params.q = searchBook;
    }

    if(!params?.maxResults) {
      params.maxResults = 40;
    }

    const response = await getList(params);
    setCurrentBooks([
      ...addData(
        books,
        mergeData && books.length > 0
      ),
      ...addData(
        response?.items,
        response?.items.length > 0
      )
    ]);
    setLoading(false);
  }

  return { 
    books,
    loading,
    callGetList
  };
}

const addData = (data: IBook[], condition?: boolean): IBook[] => {
  if(condition) {
    return data
  }

  return []
}