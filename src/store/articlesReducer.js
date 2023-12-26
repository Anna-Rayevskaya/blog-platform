import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
    'article/fetchArticles',
    async (namber, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles?limit=5&offset=${namber}`
            const res = await fetch(url)
    
            if(!res.ok){
                throw  new Error(`failed to get list of articles ${res.status}`)
            }
    
            const result = await res.json()
            return result
        } catch(error){
            return rejectWithValue(error.message)
        }
        
    }
) 

const articlesReducer = createSlice({
    name: 'articles',
    initialState:{
        articles: [],
        loading: true,
        error: false,
        page: 1,
    },
    reducers:{
        changePage (state, action){
            console.log(action.payload)
            state.page = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchArticles.fulfilled, (state, action) => {
            state.articles = action.payload.articles
            state.loading = false
          })
          .addCase(fetchArticles.rejected, (state, action) => {
            state.error = true
            console.log( action)
          })
        }
})

export const { changePage } = articlesReducer.actions

export default articlesReducer.reducer