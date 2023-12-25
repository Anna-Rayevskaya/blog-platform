import Footer from '../Footer'
import Header from '../Header'
import ListArticles from '../List-articles'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

  function changePage (n){
    setPage(n)
  }
  return (
    <div >
      <Header/>
      <ListArticles page={page}/>
      <Footer changePage= {changePage}/>
    </div>
  );
}

export default App;
