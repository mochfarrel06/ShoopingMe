import {configureStore, createSlice} from "@reduxjs/toolkit";

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("Oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store onchange: ", store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 20}));
store.dispatch(cartSlice.actions.addToCart({id: 2, qty: 30}));
