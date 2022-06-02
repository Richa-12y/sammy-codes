import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../src/compontens/Redux/reducer";
import thunk from "redux-thunk";

// const middleWare = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
