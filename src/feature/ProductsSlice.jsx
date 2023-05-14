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
    },
    delInfo :(state, action)=>{
      const id = action.payload
      state.arrinfo.splice(id,1)
    },
    // updateInfo: (state, action)=>{
    //   const edit = action.payload
    //   const infoIndex = state.arrinfo.findIndex((info)=>info.id === edit.id)
    //   if ( infoIndex>=0 ){
    //     state.arrinfo[infoIndex] = edit;
    //   }
    // }
    updateInfo: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.arrinfo.find(user => user.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
  }
});

export const { setInfo, delInfo } = ProductsSlice.actions

export default ProductsSlice.reducer