import React, {useState} from 'react';
import Grid from './Grid';

const Simulation = (props) => {
    const [running, setRunning] = useState(false);
    return(
        <div>
            {/* running: { running ? true : false } */}
            <Grid />
            
            
        </div>
    )
};

export default Simulation;