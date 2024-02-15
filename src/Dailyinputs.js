import React, { useState, useEffect } from "react";
import { fetchLatestTrainingData, sendTrainingData}  from "./nodeConnection";

export const Dailyinputs = () => {
    const styles =  {
        width: '100%',
        textAlign: "left",
        flexWrap: 'wrap',
        color: "black"
    }

    const flexStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center"
    }

    const [trainingDate, setTrainingDate] = useState(null);
    const [weightInput, setWeightInput] = useState("");
    const [weightInputDate, setWeightInputDate] = useState(null);
    const [savedWeight, setSavedWeight] = useState(null);

    useEffect(() => {
        if(trainingDate) {
            sendDataToServer("training", trainingDate);
        }
    }, [trainingDate]);

    const handleClick = () => {
        const currentDate = new Date();
        console.log("Setting training date:", currentDate); // Add this log
        setTrainingDate(currentDate);

    }

    const handleWeightChange = (e) => {
        setWeightInput(e.target.value);
    }

    const handleSaveWeight = async () => {
        const currentDate = new Date();
        setSavedWeight(weightInput);
        setWeightInputDate(currentDate);
        sendDataToServer("weight", currentDate, weightInput);
    }

    const sendDataToServer = async (type, dateToSend, weight) => {
        if (!dateToSend) {
            console.warn(`No date set for type: ${type}`);
            return;
        }
        try {
            const response = await sendTrainingData(dateToSend, type === "weight" ? weight : null);
            console.log(response);
        } catch (error) {
            console.error("Error while sending data to the server", error);
        }
    }

    return (
        <div style = {styles}>
            <div style={flexStyle}>
                <h2>Did you train today?</h2>
                <button onClick={handleClick}>Yes!!</button>
                {trainingDate && <p>Date Captured: {trainingDate.toString()}</p>}
            </div>
            <div style={flexStyle}>
                <input
                    type="number"
                    value={weightInput}
                    onChange={handleWeightChange}
                    placeholder="Enter your weight"
                />
                <button onClick={handleSaveWeight}>You Fatty!!</button>
                {savedWeight && <p>Weight: {savedWeight} kg</p>}
            </div>

        </div>
    )
}