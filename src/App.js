import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Provider } from "react-redux";
import React from "react";

import { store } from "model/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
