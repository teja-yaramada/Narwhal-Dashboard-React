import React from 'react';
import '../css/Backgrounds.css';

//import useRef and useEffect from react
import {useState} from 'react';

import './css/BasicLayoutStyles.css';
import ListSelector from './ListSelector';
import {send} from '../RobotConnection/SocketManager';

function AutoSelector(props) {

    return (
            <ListSelector
                itemType="Auto"
                items={props.autoPrograms}
                onSelectItem={(item) => {
                    send("selectauto:" + item);
                    //TODO: Update the auto image
                }}
            />
    );
}