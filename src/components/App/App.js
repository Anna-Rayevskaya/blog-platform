import Footer from '../Footer'
import Header from '../Header'
import ListArticles from '../List-articles'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);

  function changePage (n){
    if(n=== 1){
    setPage(0)
    return 
    }
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
