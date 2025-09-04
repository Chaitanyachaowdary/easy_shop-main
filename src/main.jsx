import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import  store from "./Components/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import "./index.css"; 

const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
