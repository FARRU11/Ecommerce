import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import AuthState from "./context/authLogin/authState.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthState>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthState>
  </Provider>
);
