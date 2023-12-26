import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './articlesReducer'
import articleReducer from './articleReducer'

export default configureStore({
    reducer:{
        articles: articlesReducer,
        article: articleReducer,
    }
})