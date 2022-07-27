import{createSlice} from '@reduxjs/toolkit'

const initialState =[
    // {quality:0}
];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        const foundItem = state.find((item)=>item.id===action.payload.id);
           if(!foundItem){
            state.push(action.payload);
           }else{
               return state.map((item)=>(
                    {
                        ...item,
                        quality:  item.id === foundItem.id
                        ? item.quality + action.payload.quality
                        : item.quality,
                    }
                ))
           }
        },
        deleteCart:(state,action)=>{
            return state.filter((items)=>items.id!==parseInt(action.payload));
        },
 
    }
})

//Action creator 
export const {addToCart,deleteCart} = cartSlice.actions;

//reducer
export default cartSlice.reducer;