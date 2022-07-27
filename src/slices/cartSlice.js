import{createSlice} from '@reduxjs/toolkit'

const initialState =[
    // {quality:0}
];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        const foundItem = state.find((item)=>item.img===action.payload.img);
           if(!foundItem){
            state.push(action.payload);
           }else{
               return state.map((item)=>(
                    {
                        ...item,
                        quality:  item.img === foundItem.img
                        ? item.quality + 1
                        : item.quality,
                    }
                ))
           }
        },
        deleteCart:(state,action)=>{
            console.log('delete');
            console.log(state);
        },
        increaseCart: ()=>{
            return state.map((item)=>(
                {
                    ...item,
                    quality:  item.img === foundItem.img
                    ? item.quality + 1
                    : item.quality,
                }
            ))
        }
        
    }
})

//Action creator 
export const {addToCart,deleteCart} = cartSlice.actions;

//reducer
export default cartSlice.reducer;