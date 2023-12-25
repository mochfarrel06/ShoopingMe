import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

// Case
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("Oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store onchange: ", store.getState());
});

// Dispatch
store.dispatch(addToCart({id: 1, qty: 10}));
store.dispatch(login());
