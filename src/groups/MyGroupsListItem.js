import React from 'react';
import { Link } from 'react-router-dom';

export const MyGroupsListItem = ({ group }) => (
    <div class="list-item">
        <Link to={`/groups/${group.id}`}>
            <h3>{group.name}</h3>
        </Link>
        <p>Owned By: {group.owner.fullName}</p>
        <p>{group.members.length} members</p>
    </div>
);