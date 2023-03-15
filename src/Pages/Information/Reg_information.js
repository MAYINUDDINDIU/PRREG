import { Button } from 'flowbite-react';
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
            <Navbar />
            <div className='content-center'>
        
                        <h2 className='p-3 font-bold drop-shadow text-dark text-xl'>EMPLOYEE PR REGISTRATION INFORMATION </h2>
               </div>
        
        <div className=" lg:w-full align-items-center">
          <div className='flex lg:px-6 justify-center'>
           <h2 className='bg-[#1b5e20] w-48 text-start text-white rounded p-2 mt-1'>
               NAME
            </h2>

              <h2 className='bg-[#1b5e20] w-24 ml-1 text-center text-white rounded p-2 mt-1'>
               EMP CODE
            </h2>

             <h2 className='bg-[#1b5e20] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
              MOBILE
            </h2>

               <h2 className='bg-[#1b5e20] w-48 text-start text-white rounded p-2 ml-1 mt-1'>
               DESIGNATION
            </h2>
                 <h2 className='bg-[#1b5e20] w-60 text-start text-white rounded p-2 ml-1 mt-1'>
               DEPARTMENT 
            </h2>

               <h2 className='bg-[#1b5e20] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
               ZONE CODE
            </h2>
    
                <h2 className='bg-[#1b5e20] w-60 text-center text-white rounded p-2 ml-1 mt-1'>
               ORG CODE
            </h2>
                <h2 className='bg-[#1b5e20] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
              ANDROID ID
            </h2>

             <Button className='w-20 mt-1 rounded-none ml-1 bg-[#1b5e20]' >
               EDIT
            </Button> 
            
             <Button className='w-20 mt-1 rounded-none ml-1 bg-[#1b5e20]' >
               DELETE
            </Button> 
          </div>
        
                      {
                        reginfo.length === 0 ? <p className='text-center'></p> :
                            reginfo.map(reg_info => <Show_info key={reg_info.id} reg_info={reg_info}></Show_info>)

                    }
                      
                      
              </div>
        </div>
    );
};

export default Reg_information;