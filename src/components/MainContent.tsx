import React from "react";
import { ThemeContext } from "./ThemeProvider";

export type MainContentProps = {

}

export type MainContentState = {

}

export default class MainContent extends React.Component<MainContentProps, MainContentState> {
    render() {
        return(
            <ThemeContext.Consumer>
                {(theme => (
                    <div className={`px-4 py-2 w-screen h-screen ${theme.theme.background}`}>
                        <button className="mb-4 bg-blue-600 text-gray-100"
                            onClick={theme.toggleTheme}>
                            Toggle Theme
                        </button>
                        <div className={`w-full h-full ${theme.theme.foreground}`}>
                            test
                        </div>
                    </div>
                ))}
            </ThemeContext.Consumer>
        );
    }
}