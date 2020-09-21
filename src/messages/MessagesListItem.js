import React from 'react';

export const MessagesListItem = ({ message }) => (
    <div className="list-item">
        <h3>{message.userName}</h3>
        <p>{message.text}</p>
    </div>
);