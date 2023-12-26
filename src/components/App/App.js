import { Routes, Route, Link} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import ListArticles from '../List-articles'
import ExpandedArticle from '../Expanded-article'
import LoginPage from '../Login-page'

function App() {
  return (
    <div >
      
      <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='articles/' index element={
          <>
          <ListArticles/>
          <Footer/>
          </>
        }/>

        <Route path='articles/:id' element={<ExpandedArticle/>}/>
        <Route path='sign-in' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
