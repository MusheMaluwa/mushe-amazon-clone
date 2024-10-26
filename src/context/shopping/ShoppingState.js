import { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import { shoppingReducer } from "./ShoppingReducer"; // Use the correct import

export const ShoppingState = (props) => { 
    const initialState = { basket: [], user: null };
    const [state, dispatch] = useReducer(shoppingReducer, initialState); // Use shoppingReducer here

    // Selector function to get total price of items in basket
    const getBasketTotal = (basket) =>  basket?.reduce((amount, item) => item.price + amount, 0);
    

    // Function to add item to basket
    const addToBasket = async ({item}) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: item,            
        });    
    };

    const emptyBasket = () => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
    }

    const removeFromBasket = (item) => {
        dispatch({ type: "REMOVE_FROM_BASKET", payload: item});
    };

    const setUser = (user) => {
        dispatch({
            type: 'SET_USER',
            payload: user,
        })
    }
    return (
        <ShoppingContext.Provider
            value={{
                basket: state.basket,
                user: state.user,
                getBasketTotal,
                addToBasket,
                setUser,
                removeFromBasket,
                emptyBasket,
            }}
        >
            {props.children}
        </ShoppingContext.Provider>
    );
};
