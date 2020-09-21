import { useState, useEffect } from 'react';

export const useGroups = () => {
    const [groups, setGroups] = useState([]);

    const loadGroups = async () => {
        const response = await fetch('/groups');
        const groups = await response.json();
        setGroups(groups);
    }

    useEffect(() => {
        loadGroups();
    }, []);

    return groups;
}