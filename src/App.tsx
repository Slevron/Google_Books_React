import { Container, CssBaseline } from '@material-ui/core';
import { Fragment, useEffect } from 'react';
import { BooksComponent } from './components/BooksComponent';
import { booksContext } from './context/books/Context';
import { useBooks } from './context/books/Hooks';
import { InfiniteScroll } from './components/InfiniteScroll';
import { Navigation } from './components/Navigation';
import { AxiosInstances } from './utils/AxiosInstances';

function App() {
  const data = useBooks();
  useEffect(() => AxiosInstances.initInstances())
  return (
    <Fragment>
      <CssBaseline />
      <Container className="App">
        <booksContext.Provider value={data}>
          <Navigation />
          <InfiniteScroll>
            <BooksComponent />
          </InfiniteScroll>
        </booksContext.Provider>
      </Container>
    </Fragment>
  );
}

export default App;
