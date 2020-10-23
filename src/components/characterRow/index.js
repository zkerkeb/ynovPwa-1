import React from 'react';

import Avatar from '../avatar'
import Name from '../name'

const CharacterRow = (props) => {
    return (
        <div>
            <Avatar url={props.url}></Avatar>
            <Name name={props.name}></Name>
        </div>
    );
};

export default CharacterRow;