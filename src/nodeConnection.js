import axios  from "axios";
import { getCurrentUserId } from './auth'; // Import the function
const SERVER_URL = 'http://localhost:5001';
export const fetchLatestTrainingData = async () => {
    console.log("Attempting to fetch latest training data...");
    try {
        const userId = getCurrentUserId();
        const response = await axios.get(`${SERVER_URL}/latest-trainings`, {
            params: {userId}
        });
        console.log("Latest Training Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching latest training data", error);
        throw error;
    }
};
export const fetchInitialData = async () => {
    console.log("Attempting to fetch initial training data...");
    try {
        const userId = getCurrentUserId();
        const response = await axios.get(`${SERVER_URL}/initial-trainings`, {
            params: {userId}
        });
        console.log("First Training Data:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error fetching initial training data", error);
    }
};
export const sendTrainingData = async (date, weight) => {
    try {
        const userId = getCurrentUserId();
        const payload = {userId, date} ;
        if (weight !== null) {
            payload.weight = weight;
        }
        const response = await axios.post(`${SERVER_URL}/trainings`, payload);
        console.log("Data sent to server:", payload);
        console.log("Server Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error sending training data", error);
        throw error;
    }
}