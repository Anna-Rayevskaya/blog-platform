import { Routes, Route} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import ListArticles from '../List-articles'
import ExpandedArticle from '../Expanded-article'
import LoginPage from '../Login-page'
import RegistrationPage from '../Registration-page'
import EditProfilePage from '../EditProfile-page'
import CreateArticle from '../Create-article'

function App() {
  return (
    <div >
       
      <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='articles/' index element={<ListArticles/>}/>
        <Route path='articles/:id' element={<ExpandedArticle/>}/>
        <Route path='sign-in' element={<LoginPage/>}/>
        <Route path='sign-up' element={<RegistrationPage/>}/>
        <Route path='profile' element={<EditProfilePage/>}/>
        <Route path='new-article' element={<CreateArticle/>}/>
        <Route path='articles/:id/edit' element={<CreateArticle action='edit'/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
