import React from "react"
import ReactDOM from "react-dom/client"


import Body from "./src/Body"

const App = () => <Body />


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)