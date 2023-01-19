import { Button, Table, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Show_info = ({ reg_info }) => {
    const { NAME, EMP_CODE, MOB_NO, DESIG_NAME, DEPT_NAME, ZONE_CODE, DCS_ORG_CODE, ANDROID_ID } = reg_info;
    
    const [emp_data, SetempData] = useState([]);


    // const handleUPDATE = EMP_CODE => {
    //     // const proceed = window.confirm('Are you sure?Approve This');
       
    //         const url = `https://digitalpr.fareastlife.com/api/user/user-info`;
    //         fetch(url, {
    //             method: "POST"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data);
    //                 // const rest = products.filter(product => product._id !== id);
    //                 // console.log(rest)
    //                 SetempData(data);
                    
    //             })
        
    // }

          //******Handle post data in database********
  const handleUPDATE = EMP_CODE => {

    // const ID = '63';
    const emp_code = EMP_CODE

    // toast("Successfully Saved Your Application");

    // console.log( emp_code);

    // const addItem = {
    // };
    // const url = `https://digitalpr.fareastlife.com/api/register`;


fetch("https://digitalpr.fareastlife.com/api/user/user-info", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "digitalpr.fareastlife.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
      "body": JSON.stringify({
        emp_code:emp_code,
        itadmin: "1021"
    
  })
})
.then(response => response.json())
.then(response => {
    
    SetempData(response['user_info']);

})
.catch(err => {
  console.log(err);
});


  }




    


    return (
 
        <div className='flex lg:px-6 justify-center'>

         

            <h2 className='bg-[#2e7d32] w-48 text-start text-white rounded p-2 mt-1'>
                {NAME}
            </h2>

              <h2 className='bg-[#2e7d32] w-24 ml-1 text-center text-white rounded p-2 mt-1'>
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



            <div class="">
              
                    <Link to={`/edit=${EMP_CODE}`}>  <button type="button"  class="w-20 mt-1 ml-1 px-6 ml-1 py-2.5 bg-[#2e7d32] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
               EDIT
                </button></Link>  
                
            </div>



             {/* <Button className='w-20 mt-1 rounded-none ml-1' color='success' >
                EDIT  { EMP_CODE}
            </Button>  */}
            
             <Button className='w-20 mt-1 rounded-none ml-1' color='failure' >
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