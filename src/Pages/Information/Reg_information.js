import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Show_info from './Show_info';

const Reg_information = () => {

    const [reginfo, setReginfo] = useState([]);
    // console.log(reginfo);

    useEffect(() => {
    const getcountry = async () => {
      const req = await fetch('http://202.164.213.67/digital_pr/pr-permission/permission_info.php');
      const getres = await req.json();
      // console.log(getres);
      setReginfo(await getres['REG_INFO']);
    }
    getcountry();


  }, []);



    return (
        <div>
              <Navbar/>
            <h3>All Info</h3>
            
               <div className=" lg:w-full ">
                       
                      {
                        reginfo.length === 0 ? <p className='text-center'></p> :
                            reginfo.map(reg_info => <Show_info key={reg_info.id} reg_info={reg_info}></Show_info>)

                    }
                      
                      
              </div>
        </div>
    );
};

export default Reg_information;