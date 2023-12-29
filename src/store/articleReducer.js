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

export const deleteArticle = createAsyncThunk(
    'article/deleteArticle',
    async (data, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles/${data.id}`
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Token ${data.token}`
                }
            })
    
            if(!res.ok){
                alert('Что-то пошло не так, попробуйте снова!')
                throw  new Error(`couldn't create articles ${res.status}`)
            }
    
            alert('Вы успешно удалили статью!')

        } catch(error){
            return rejectWithValue(error.message)
        }
    
    }
) 

export const updateArticle = createAsyncThunk(
    'article/updateArticle',
    async (data, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/articles/${data.id}`
            const res = await fetch(url, {
                method: 'PUT',
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
        myArticles: null,
        tags: [''],
    },
    reducers:{
        addTags(state, action){
            state.tags = [...state.tags, action.payload]
        },

        deleteTags(state, action){

        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchArticle.fulfilled, (state, action) => {
            state.loading = false
            state.article = action.payload.article
            state.tags = action.payload.article.tagList
          })
          .addCase(fetchArticle.rejected, (state, action) => {
            state.loading = false
            state.error = true
          })

          .addCase(deleteArticle.fulfilled, (state, action) => {
            state.error = true
          })


          .addCase(createArticle.fulfilled, (state, action) => {
            alert('Вы успешно создали статью!')
          })
          .addCase(createArticle.rejected, (state, action) => {
            alert(`Ошибка!, ${action.payload}`)
          })

          .addCase(updateArticle.fulfilled, (state, action) => {
            alert('Вы успешно отредактировали статью!')
          })
          .addCase(updateArticle.rejected, (state, action) => {
            console.log(action)
            alert(`Ошибка!, ${action.payload}`)
          })

        }
})

export const {addTags} = articleReducer.actions

export default articleReducer.reducer