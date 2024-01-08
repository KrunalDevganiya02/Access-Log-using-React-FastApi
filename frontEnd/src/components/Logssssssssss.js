import React, { useState } from 'react';
import './logs.css';

function AccessLogs() {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [logs, setLogs] = useState(null);



    const fetchLogs = async () => {
       

        try {
            const response = await fetch(`http://localhost:8000/access-logs/?start=${startTime}&end=${endTime}`);
           
            const data = await response.json();
        
            setLogs(data);
        } 
        
        catch (err) {
            console.log(err);
        }
        
    };

    return (
        <div className='container'>
            <h1>Access Logs</h1>

            <label>
                Start Time: <nbsp/>
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
            </label>
            
            <br/>
            
            <label>
                 End Time : <nbsp/>
                <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} />
            </label>
            
            <br/>
            
            <button onClick={fetchLogs}>Fetch Logs</button>
            
             <pre className='logs'>{JSON.stringify(logs, null, 2) } </pre>
        
        </div>
    );
}

export default AccessLogs;
