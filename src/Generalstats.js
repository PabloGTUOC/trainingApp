import React, { useState, useEffect } from "react";
import axios from "axios";
import {fetchInitialData, fetchLatestTrainingData} from "./nodeConnection";

const SERVER_URL = "http://localhost:5001";
export const Generalstats = () => {
    const styles =  {
        width: '100%',
        textAlign: "left",
        flexWrap: 'wrap',
        color: "black"
    };

    const [initialDate, setInitialDate] = useState(null);
    const [latestTrainingDate, setLatestTrainingDate]  = useState(null);
    const [initialWeight, setInitialWeight] = useState(null);
    const [latestWeight, setLatestWeight] = useState(null);

    useEffect(() => {
        const fetchFirstData = async () => {
            const data = await fetchInitialData();
            if (data && data.success) {
                setInitialDate(data.date);
                setInitialWeight(data.weight);
            }
        };
        fetchFirstData();
    }, []);

    // Fetch the latest weight data when the component mounts
    useEffect(() => {
        const fetchLatestData = async () => {
            const data = await fetchLatestTrainingData();
            if (data && data.success) {
                setLatestTrainingDate(data.date);
                setLatestWeight(data.weight);
            }
        };
        fetchLatestData();
    }, []);

    const daysSinceTrainingStarted = initialDate ? Math.ceil((new Date() - new Date(initialDate)) / (1000 * 60 * 60 * 24)) : 0;
    console.log(daysSinceTrainingStarted);
    const weightLost = initialWeight && latestWeight ? initialWeight - latestWeight : 0;

    return (
        <div style={styles}>
            <h2>You have trained {daysSinceTrainingStarted} days since {new Date(initialDate).toLocaleDateString()} and lost {weightLost} kilos Bitch!!</h2>
        </div>
    )
}