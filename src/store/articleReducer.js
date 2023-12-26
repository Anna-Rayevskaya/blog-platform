import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchArticle = createAsyncThunk(
    'article/fetchArticle',
    async (id, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles/${id}`
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

const articleReducer = createSlice({
    name: 'article',
    initialState:{
        article: null,
        loading: true,
        error: false,
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchArticle.fulfilled, (state, action) => {
            state.loading = false
            state.article = action.payload.article
            
          })
          .addCase(fetchArticle.rejected, (state, action) => {
            state.loading = false
            state.error = true
          })
        }
})

export default articleReducer.reducer