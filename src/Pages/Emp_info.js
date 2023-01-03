import { Button, Checkbox, TextInput } from 'flowbite-react';
import React from 'react';
import image from '././Assets/login_banner.jpg';
import logo from './Assets/filic.png';
const Emp_info = ({ emp_i }) => {


    const { NAME,EMP_CODE,ZONE_CODE,MOBILE_NUMBER,DIV_CODE,OFF_TYPE} = emp_i;
    
    console.log(NAME);
    
    
    return (
        <div>
            <div className= 'lg:px-60 grid lg:grid-cols-2 gap-0  justify-center p-4'>
                <div className='shadow-lg p-5 bg-[#66bb6a] text-white text-start rounded-md'>
                    <h1 className='text-xl'>USER NAME: {NAME}</h1>
                    <h1 className='text-lg'>EMP CODE: {EMP_CODE}</h1>
                    <h1 className='text-lg'>MOBILE: { MOBILE_NUMBER}</h1>
                </div>

                  <div className='shadow-lg p-5 ml-4 bg-[#66bb6a] text-white text-start rounded-md'>
                    <h1 className='text-lg'>ZONE CODE: {ZONE_CODE}</h1>
                    <h1 className='text-lg'>OFF TYPE: {OFF_TYPE}</h1>
                    <h1 className='text-lg'>DIV CODE: { DIV_CODE}</h1>
                </div>
                   
                   
              </div>
         

      
      <div className='lg:px-60 lg:py-24 lg:mb-12 lg:mt-5  items-center'>
            <div class="shadow-xl lg:py-8 rounded-md grid lg:grid-cols-2 gap-0  justify-center">
                
                <div className='flex items-center justify-center'>
                 <img src={image} alt="" />
                </div>
                <div className=' px-12 py-2'>
                    <div className='flex items-center justify-center '>
                        <img className='h-28 shadow-md rounded-full p-2 mb-5' src={logo} alt="" />
                    </div>
                
                   <form   className="flex flex-col gap-2">
                        <div>
                         
                            <TextInput
                            id="user_id"
                            type="number"
                            placeholder="UserID"
                            required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 text-start  block">
                         
                            </div>
                            <TextInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            required={true}
                            />
                        </div>
                   
                        <Button className='mb-2' color="success" type="submit">
                            Submit
                        </Button>

                       
                        </form>

                </div>

                

                </div>
  </div>
        </div>
    );
};

export default Emp_info;