import { createStore } from "redux";
import cartReducer from "./cartAuth/cartReducer";
const store = createStore(cartReducer);

export default store;
