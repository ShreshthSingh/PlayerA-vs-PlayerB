import *as actionTypes from './actions';
const initialState = {
  type:"ironman",
  score:304
};



const reducer = (state=initialState,action)=>{
    switch (action.type){
        case actionTypes.ADD_TOPPING:
            return{
                ...state,
                Toppings:{
                    ...state.Toppings,
                    [action.ToppingName]:state.Toppings[action.ToppingName]+1
                },
                totalPrice:state.totalPrice + TOPPING_PRICE[action.ToppingName] 
      
    };
    case actionTypes.REMOVE_TOPPING:
            return{
                ...state,
                Toppings:{
                    ...state.Toppings,
                    [action.ToppingName]:state.Toppings[action.ToppingName]-1
                },
                totalPrice:state.totalPrice - TOPPING_PRICE[action.ToppingName]
      
    };
    default:
        return state;

    }
   
}
  
export default reducer;