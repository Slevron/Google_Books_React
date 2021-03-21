import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { FilterComponent } from "./FilterComponent";
import { FilterResetComponent } from "./FilterResetComponent";
import { SearchNav } from "./SearchComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      margin: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
  }),
);
export const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <SearchNav />
      <FilterComponent />
      <FilterResetComponent />
    </div>
  )
}