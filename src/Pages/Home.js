import { Button } from 'flowbite-react';
import React, { useState,useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import logo from './Assets/filic.png';
import Emp_info from './Emp_info';
import Navbar from './Navbar/Navbar';

const Home = () => {
    const [details, setDetails] = useState([]);

    //   const [country, setCountry] = useState([]);
    // console.log(country);
    const { id } = useParams();

    // http://202.164.213.67/digital_pr/pr-permission/emp_info.php?EMP_CODE=00006239
    //   useEffect(() => { 

    //  fetch(`http://202.164.213.67/digital_pr/pr-permission/emp_info.php?EMP_CODE=${id}`)
    //         .then(Response => Response.json())
    //         .then(data => setDetails(data));

    //   });
    
    useEffect(() => {
    const getinfo = async () => {
      const req = await fetch(`http://202.164.213.67/digital_pr/pr-permission/emp_info.php?EMP_CODE=${id}`);
      const getres = await req.json();
    //   console.log(getres);
      setDetails(await getres);

    }
    getinfo();


  }, []);


    return (
        <div className='justify-center'>
              <Navbar/>
            {/* <div className='justify-center'>
                <Button color="success">
                 <Link to={'/'}>Logout</Link>
                </Button>
                     
                 </div> */}
         
            
                <div >
                        {
                details.length === 0 ? <p className='text-center'> </p> :
                details.map(emp_i => <Emp_info key={emp_i.id} emp_i={emp_i}></Emp_info>)

                    }
                    
         
                </div>
             

        </div>
    );
};

export default Home;