import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FunctionComponent } from "react";
import { IBook } from "../models/Book";
import { arrayToString, limitStringSize } from "../utils/DisplayUtils";

interface IProps {
  dataBook: IBook;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }),
);

export const BookComponent: FunctionComponent<IProps> = ({
  dataBook
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <img 
          alt='cover_book'
          src={ dataBook?.volumeInfo.imageLinks?.thumbnail } 
        />
        <h3>
          { dataBook?.volumeInfo.title }
        </h3>
        <p>{ arrayToString(dataBook?.volumeInfo.authors) }</p>
        <p>{ limitStringSize(dataBook?.volumeInfo.description, 100)}</p>
        <p>{ arrayToString(dataBook?.volumeInfo.categories) }</p>
      </Paper>
    </Grid>
  )
}