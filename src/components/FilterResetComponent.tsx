import { Button } from "@material-ui/core"
import { FunctionComponent, useContext } from "react"
import { booksContext } from "../context/books/Context";

export const FilterResetComponent: FunctionComponent = () => {
  const { clone, setCurrentBooks } = useContext(booksContext);

  const handleClick = () => {
    setCurrentBooks(clone);
  }

  return (
    <Button 
      variant="contained"
      onClick={handleClick}
    >  
      Reset Filter
    </Button>
  )
}