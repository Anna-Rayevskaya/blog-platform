import { Routes, Route, Link} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import ListArticles from '../List-articles'
import { useState } from 'react';
import ExpandedArticle from '../Expanded-article'
import LoginPage from '../Login-page'

function App() {
  const [page, setPage] = useState(1);

  function changePage (n){
    setPage(n)
  }
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/articles' element={
          <>
          <ListArticles page={page}/>
          <Footer changePage= {changePage}/>
          </>
        }/>

        <Route path='/articles/id' element={<ExpandedArticle/>}/>
        <Route path='/sign-in' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
