import { FunctionComponent, useContext } from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BookComponent } from "./BookComponent";
import { booksContext } from "../context/books/Context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

export const BooksComponent: FunctionComponent = () => {
  const classes = useStyles();
  const { books } = useContext(booksContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            {
              books?.map(
                (book, index) => <BookComponent dataBook={book} key={index}/>
              )
            }
        </Grid>
      </Grid>
    </div>
  )
}
