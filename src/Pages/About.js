import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const About = ({ info } ) => {
    // const [details, setDetails] = useState([]);
    // console.log(details);
    const navigate = useNavigate();

    const { emp_code, status, name, desig_name, dept_name, zone_code,div_code } = info;
    console.log(emp_code, status, name, desig_name, dept_name, zone_code,div_code);
    const result = status;
    console.log(result);

    // useEffect(() => { 

    //  fetch(`http://202.164.213.67/digital_pr/pr-permission/login.php?EMP_CODE=${EMP_CODE}&&PASSWORD=${PASSWORD}`)
    //         .then(Response => Response.json())
    //         .then(data => setDetails(data));

    //  });


    // useEffect(() => {
    //     if (result === 1) {
    //         console.log('success');
    //         navigate(`/home=${emp_code}`);
            
    //         //  window.location.replace('https://fareastislamilife.com');
    //     } else {
          
    //          toast.error(`Opps!Please type proper emp code & password`);
    //     }
    // });
    

   




    
    return (
        <div>
             <ToastContainer />
        </div>
        
    );
};

export default About;