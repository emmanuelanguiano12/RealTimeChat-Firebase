import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx"

import ChatProvider from "./context/ChatProvider.js";

ReactDom.render(
    <React.StrictMode>
        <ChatProvider>
            <App />
        </ChatProvider>
    </React.StrictMode>,
    document.getElementById('root')
)