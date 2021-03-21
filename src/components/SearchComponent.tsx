import TextField from "@material-ui/core/TextField";
import { FunctionComponent, KeyboardEvent } from "react";
import { isString } from "../middleware/ValidationParams";
import { ServerUtils } from "../utils/ServerUtils";


export const SearchNav: FunctionComponent = () => {
  const { callGetList } = ServerUtils()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (e.key === 'Enter') {
      if(isString(value)) {
        callGetList({
          q: value
        })
      }
    }
  }

  return (
    <TextField 
      id="standard-search" 
      label="Search field" 
      type="search"
      onKeyDown={handleKeyDown}
    />
  )
}