import React from "react";
export const Header = () => {
    const styles =  {
        width: '100%',
        textAlign: "left",
        flexWrap: 'wrap',
        color: "black",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    }

    const h1Styles = {
        color: "black",
        margin: "0",
    }

    return (
        <div style = {styles}>
            <h1 style={h1Styles}>The<br /> GoToTheF***gGym<br /> APP!</h1>
        </div>
    )
}
