import React, { useState, useEffect } from "react";
import { fetchLatestTrainingData, sendTrainingData}  from "./nodeConnection";

export const Dailyinputs = () => {
    const styles =  {
        width: '100%',
        flexWrap: 'wrap',
        color: "black"
    }

    const flexStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%"
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
                <button className="button" onClick={handleClick}>Yes!!</button>

            </div>
            {trainingDate && (
                <p>You moved your f***g ass on the {trainingDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</p> // Adjusted message for date
            )}
            <div>
            </div>
            <div style={flexStyle}>
                <input
                    className="input"
                    type="number"
                    value={weightInput}
                    onChange={handleWeightChange}
                    placeholder="Enter your weight"
                />
                <button className="button" onClick={handleSaveWeight}>You Fatty!!</button>

            </div>
            <div>
                {savedWeight && (
                    <p>Gosh your {savedWeight} kilos are depressing!</p> // Adjusted message for weight
                )}
            </div>
        </div>
    )
}