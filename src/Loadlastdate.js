import React, {useState, useEffect} from "react";
import { fetchLatestTrainingData, }  from "./nodeConnection";

export const Loadlastdate = () => {
    const styles =  {
        width: '100%',
        textAlign: "left",
        flexWrap: 'wrap',
        color: "black"
    };

    // State variables to hold the latest training data
    const [latestTrainingDate, setLatestTrainingDate] = useState(null);
    const [latestWeight, setLatestWeight] = useState(null);

    // Fetch the latest training data when the component mounts
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

    return (
        <div style={styles}>
            <h2>Last Training day: {latestTrainingDate && new Date(latestTrainingDate).toLocaleDateString()}</h2>
            <h2>Last recorded weight: {latestWeight && `${latestWeight} kg`}</h2>
        </div>
    )
}