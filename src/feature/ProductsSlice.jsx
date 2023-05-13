import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrinfo: [{
    id : 1,
    name:" maitan",
    email: "maitan5995@gmail.com",
    phone: '0386978828'
  },]
}

const ProductsSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo :(state, action) =>{
      const info = action.payload
      state.arrinfo.push(info)
    }
  }
});

export const { setInfo } = ProductsSlice.actions

export default ProductsSlice.reducer