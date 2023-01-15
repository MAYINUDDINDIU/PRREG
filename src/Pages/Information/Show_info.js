import { Button, Table } from 'flowbite-react';
import React from 'react';

const Show_info = ({ reg_info }) => {
    const { NAME,EMP_CODE,MOB_NO,REG_DATE,DESIG_NAME,DEPT_NAME,ZONE_CODE,DCS_ORG_CODE,ANDROID_ID} = reg_info;
    return (
 
        <div className='flex lg:px-12 justify-center'>

            <h2 className='bg-[#2e7d32] w-48 text-start text-white rounded p-2 mt-1'>
                {NAME}
            </h2>

              <h2 className='bg-[#2e7d32] w-32 ml-1 text-center text-white rounded p-2 mt-1'>
                {EMP_CODE}
            </h2>

             <h2 className='bg-[#2e7d32] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
                {MOB_NO}
            </h2>

               <h2 className='bg-[#2e7d32] w-48 text-start text-white rounded p-2 ml-1 mt-1'>
                {DESIG_NAME}
            </h2>
                 <h2 className='bg-[#2e7d32] w-60 text-start text-white rounded p-2 ml-1 mt-1'>
                {DEPT_NAME}
            </h2>

               <h2 className='bg-[#2e7d32] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
                {ZONE_CODE}
            </h2>
    
                <h2 className='bg-[#2e7d32] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
                {DCS_ORG_CODE}
            </h2>
                   <h2 className='bg-[#2e7d32] w-32 text-center text-white rounded p-2 ml-1 mt-1'>
                {ANDROID_ID}
            </h2>

             <Button className='w-20 mt-1 rounded-none ml-1' color='success' >
               EDIT
            </Button> 
            
             <Button className='w-20 mt-1 rounded-none ml-1' color='success' >
               DELETE
            </Button> 
            {/* <Button className='w-48 mt-1 rounded-none bg-[#2e7d32]'>
                {NAME}
            </Button>
             <Button className='w-32 mt-1 rounded-none ml-1' color="success">
                {EMP_CODE}
            </Button>
              <Button className='w-48 mt-1 rounded-none ml-1' color="success">
                {MOB_NO}
            </Button>

               <Button className='w-48 mt-1 rounded-none ml-1' color="success">
                {DESIG_NAME}
            </Button>
                  <Button className='w-60 mt-1 rounded-none ml-1' color="success">
                {DEPT_NAME}
            </Button>
                  <Button className='w-32 mt-1 rounded-none ml-1' color="success">
                {ZONE_CODE}
            </Button>
                    <Button className='w-24 mt-1 rounded-none ml-1' color="success">
                {DCS_ORG_CODE}
            </Button>
                 <Button className='w-20 mt-1 rounded-none ml-1' >
               EDIT
            </Button> */}
        
        </div>
        


    );
};

export default Show_info;