import { 
  createStyles, 
  FormControl, 
  InputLabel, 
  makeStyles,
  MenuItem, 
  Select, 
  Theme 
} from "@material-ui/core";
import { ChangeEvent, FunctionComponent, useContext } from "react";
import { booksContext } from "../context/books/Context";
import { filterByAuthors, getAuthors } from "../utils/BooksUtils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);
export const FilterComponent: FunctionComponent = () => {
  const classes = useStyles();
  const { clone, setCurrentBooks } = useContext(booksContext);

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setCurrentBooks(filterByAuthors(clone, value), true);
  }

  return (
    <FormControl className={classes.formControl}>
        <InputLabel>Authors</InputLabel>
        <Select
          value={''}
          onChange={handleChange}
        >
          {
            getAuthors(clone).map(
              (author, index) => (
                <MenuItem value={ author } key={index}>
                  { author }
                </MenuItem>
              )
            )
          }
        </Select>
    </FormControl>
  );
}