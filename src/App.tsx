import React from "react";
import "./App.css";
import "./assets/main.css";
import MainContent from "./components/MainContent";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <div className="">
                <MainContent />
            </div>
        </ThemeProvider>
    );
}

export default App;
