import { FunctionComponent} from "react";
import { ServerUtils } from '../utils/ServerUtils'
export const InfiniteScroll: FunctionComponent = ({children}) => {
  const { loading, callGetList, books } = ServerUtils();
  
  window.onscroll = () => {
    if(
      window.scrollY + window.innerHeight > document.body.clientHeight - 100 
      && !loading
    ) {
      const params = {
        startIndex: books?.length
      }
      callGetList(params, true)
    }
  }

  return (
    <div>
      {books?.length}
      { children }
    </div>
  )
}