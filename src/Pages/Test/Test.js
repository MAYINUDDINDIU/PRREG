import React, { useState } from 'react';

const Test = () => {
      
    const [tdata, setTdata] = useState([]);
    console.log(tdata);

        const handleAdded = event => {
        event.preventDefault();
        // const policy_no = (event.target.pol_no.value);
        // console.log(policy_no);
        // if (policy_no < 10) {
        //     setError('Policy Number no longer than 10 character')
        //     return;
        // }

        // console.log(policy_no);
            
            const emp_code = '00005942';   
            const password = '123456';  
            const android_id = '5942';    
            const addItem = { emp_code, password, android_id };
            console.log(addItem);

        const url = 'https://digitalpr.fareastlife.com/api/login';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)

        })
            .then(Response => Response.json())
            .then(data => setTdata(data['user']));
           
    }





    return (
        <div>
            <button className='color:success' onClick={handleAdded}>Test Click</button>
            <h2>hello</h2>
        </div>
    );
};

export default Test;