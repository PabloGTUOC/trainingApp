import { auth } from './firebaseConfig'; // Adjust the path as necessary

export const getCurrentUserId = () => {
    const user = auth.currentUser;
    return user ? user.uid : null;
};
