import React from 'react';
import { postWithCredentials } from '../data';

export const GroupsListItem = ({ group }) => {
    const postJoinRequest = async () => {
        await postWithCredentials(`/groups/${group.id}/request`);
        alert('Your request has been submitted');
    }

    return (
        <div className="list-item">
            <h3>{group.name}</h3>
            <p>Owned by: {group.owner.fullName}</p>
            <p>{group.members.length} members</p>
            <button onClick={postJoinRequest}>Ask to Join</button>
        </div>
    );
}