import { Button, Checkbox, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import image from '././Assets/login_banner.jpg';
import logo from './Assets/filic.png';
import All_info from './Information/All_info';
const Emp_info = ({ emp_i }) => {

    const { NAME,EMP_CODE,ZONE_CODE,MOBILE_NUMBER,DIV_CODE,OFF_TYPE} = emp_i;
 


        const [empData, SetEmpData] = useState([]);
        // console.log(empData);


    const information = (event) => {
        event.preventDefault();
        const emp_code = (event.target.user_id.value);
        // console.log(emp_id);
        fetch(`http://202.164.213.67/digital_pr/pr-permission/information.php?EMP_CODE=${emp_code}`)
            .then(Response => Response.json())
            .then(data => SetEmpData(data))

            }




    return (
        <div>
            <div className= 'lg:px-32 grid lg:grid-cols-2 gap-0  justify-center p-4'>
                <div className='shadow-lg p-5 bg-[#f5f5f5]  text-dark text-start rounded-md'>
                    <h1 className='text-xl'>USER NAME: {NAME}</h1>
                    <h1 className='text-lg'>EMP CODE: {EMP_CODE}</h1>
                    <h1 className='text-lg'>MOBILE: { MOBILE_NUMBER}</h1>
                </div>

                  <div className='shadow-lg p-5 lg:mt-0 mt-2 lg:ml-4 bg-[#f5f5f5] text-dark text-start rounded-md'>
                    <h1 className='text-lg'>ZONE CODE: {ZONE_CODE}</h1>
                    <h1 className='text-lg'>OFF TYPE: {OFF_TYPE}</h1>
                    <h1 className='text-lg'>DIV CODE: { DIV_CODE}</h1>
                </div>
                   
                   
              </div>
         
      
      <div className='lg:px-32 lg:py-2 lg:mb-2 lg:mt-0  items-center'>
            <div class="shadow-2xl lg:py-2 rounded-md grid lg:grid-cols-2 gap-0  justify-center">
                
                <div className='flex items-center justify-center'>
                 <img src={image} alt="" />
                </div>
                <div className=' px-6 py-2'>
                    {/* <div className='flex items-center justify-center '>
                        <img className='h-28 shadow-md rounded-full p-2 mb-5' src={logo} alt="" />
                    </div> */}
                
                     <form onSubmit={information}>
                        <div className='flex shadow-md p-5'>
                            <TextInput
                            className='lg:w-96 w-60 rounded'
                            id="user_id"
                            type="number"
                            placeholder="Type Employee ID"
                            required={true}
                                />
                           <Button className='lg:w-32 rounded lg:ml-3 ml-3' color="success" type="submit">
                            Submit
                        </Button>
                             
                        </div>
                        </form>
                  
                    {
                        empData.length === 0 ? <p className='text-center'></p> :
                            empData.map(d => <All_info key={d.id} d={d}></All_info>)

                    }
                       
                     

                </div>

                

                </div>
  </div>
        </div>
    );
};

export default Emp_info;