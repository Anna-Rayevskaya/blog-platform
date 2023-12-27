import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk(
    'article/fetchToken',
    async (data, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/users`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
    
            if(!res.ok){
                if (res.status === 422) {
                    alert('Это имя или email уже занято!')
                    return 'error'
                  }
                throw  new Error(`${res.status}`)
            }
    
            const result = await res.json()
            return result
        } catch(error){
            return rejectWithValue(error.message)
        }
        
    }
) 

export const fetchUser = createAsyncThunk(
    'article/fetchUser',
    async (data, { rejectWithValue }) => {
        try{
            const url =  `https://blog.kata.academy/api/users`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
    
            if(!res.ok){
                if (res.status === 422) {
                    alert('Это имя или email уже занято!')
                    return 'error'
                  }
                throw  new Error(`${res.status}`)
            }
    
            const result = await res.json()
            return result
        } catch(error){
            return rejectWithValue(error.message)
        }
        
    }
) 

const registrationReducer = createSlice({
    name: 'registration',
    initialState:{
        registration: false,
        user: null,
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchToken.fulfilled, (state, action) => {
            state.registration = true
            localStorage.setItem('userToken', action.payload.user)
          })
          .addCase(fetchToken.rejected, (state, action) => {
            state.error = true
            console.log( action)
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload.user
            localStorage.setItem('user', action.payload.user)
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.error = true
            console.log( action)
          })
        },
})

export default registrationReducer.reducer