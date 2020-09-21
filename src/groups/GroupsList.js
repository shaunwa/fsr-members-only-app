import React from 'react';

export const GroupsList = ({ groups, ListItemComponent }) =>
    groups.map(group => (
        <ListItemComponent key={group._id} group={group} />
    ));