import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formEdit: {
    id: "",
    name: "",
    email: "",
    phone: "",
    watch: false
  },

  arrinfo: [
    {
      id: 123,
      name: " maitan",
      email: "maitan5995@gmail.com",
      phone: "0386978828",
    },
  ],
};

const ProductsSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      const info = action.payload;
      state.arrinfo.push(info);
    },
    delInfo: (state, action) => {
      const id = action.payload;
      state.arrinfo.splice(id, 1);
    },
    valueUpdate: (state, action) => {
      console.log("action~", action.payload);
      state.formEdit = {...action.payload, watch : true};
    },
    updateInfo: (state, action)=>{
      const edit = action.payload
      console.log("action.payload~", action.payload)
      const infoIndex = state.arrinfo.findIndex((info)=>info.id == edit.id)
      console.log("infoIndex~", infoIndex)
      
      if ( infoIndex>=0 ){
        state.arrinfo[infoIndex] = edit;
      }
    }
    // updateInfo: (state, action) => {
    //   const { id, name, email, phone } = action.payload;
    //   console.log("action.payload~", action.payload)
    //   
    //   const user = state.arrinfo.findIndex((user) => user.id === id);
    //   console.log(" user~",  user)
    //   
    //   if (user=== -1) {
    //     user.name = name;
    //     user.email = email;
    //     user.phone = phone;
    //   }
    // },
  },
});

export const { setInfo, delInfo, valueUpdate, updateInfo } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
