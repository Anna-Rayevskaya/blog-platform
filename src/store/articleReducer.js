import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchArticle = createAsyncThunk(
    'article/fetchArticle',
    async (id, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles/${id}`
            const res = await fetch(url)
    
            if(!res.ok){
                throw  new Error(`couldn't get article ${res.status}`)
            }
    
            const result = await res.json()
            return result

        } catch(error){
            return rejectWithValue(error.message)
        }
    
    }
) 

export const createArticle = createAsyncThunk(
    'article/createArticle',
    async (data, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${data.token}`
                },
                body: JSON.stringify(data.params)
            })
    
            if(!res.ok){
                throw  new Error(`couldn't create articles ${res.status}`)
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
        mainArticle: null,
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
          .addCase(createArticle.fulfilled, (state, action) => {
            state.mainArticle = action.payload.article
            localStorage.getItem( 'mainArticle', action.payload.article)
          })
          .addCase(createArticle.rejected, (state, action) => {
            console.log(action)
          })
        }
})

export default articleReducer.reducer