import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useUserGroups = () => {
    const [groups, setGroups] = useState([]);

    const loadGroups = async () => {
        const user = firebase.auth().currentUser;
        if (!user) {
            setGroups([]);
            return;
        }

        const response = await fetch(`/users/${user.uid}/groups`, {
            headers: {
                AuthToken: await user.getIdToken(),
            }
        });
        const groups = await response.json();
        setGroups(groups);
    }

    useEffect(() => {
        loadGroups();
    }, []);

    return groups;
}