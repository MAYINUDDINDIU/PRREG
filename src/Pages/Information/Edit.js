import { Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Edit = () => {
 const { id } = useParams();

    
    const [editinfo, setEditinfo] = useState([]);
    
    const { name,emp_code,mobile_number,desig_name,dept_name,zone_code,dcs_org_code,android_id } = editinfo;


    useEffect(() => {
    const editdata = async () => {
    //   const req = await fetch('https://digitalpr.fareastlife.com/api/user/user-info');
    //   const getres = await req.json();
      // console.log(getres);
        // setEditinfo(await getres['REG_INFO']);
        
 const req = await  fetch("https://digitalpr.fareastlife.com/api/user/user-info", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "digitalpr.fareastlife.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
      "body": JSON.stringify({
        emp_code:id,
        itadmin: "1021"
    
  })
 })
const getres = await req.json();
// .then(response => response.json())
// .then(response => {
    
//     SetempData(response['user_info']);

// })
// .catch(err => {
//   console.log(err);
// });
      setEditinfo(await getres['user_info']);


    }
    editdata();


  }, []);
    
    
    

    return (


        
        <div className=''>
            <Navbar />
            




            <div className='px-80'>

           
           
            <div className='shadow-lg  lg:px-6 mt-2'>
           <h2 className='p-3 font-bold drop-shadow text-dark text-xl'>EDIT EMPLOYEE PR PERMISSION </h2>
               
         <div className='flex'>
                    <div class="mb-1 ">
            <h6 className='text-start'>EMPLOYEE NAME</h6>
            <input
              type="text"
              class="form-control  w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
             placeholder="NAME"
              value={name}
              
                />
                
                </div>
                    <div class="mb-1 ml-2">
                                    <h6 className='text-start'>EMP CODE</h6>

            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="EMP CODE"
                            value={emp_code}
            />
          </div>
                </div>
                

            <div className='flex'>
                    <div class="mb-1">
                        
    <h6 className='text-start'>Mobile Number</h6>
       
            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="MOBILE"
                              value={mobile_number}
            />
                </div>
                    <div class="mb-1 ml-2">
                        
  <h6 className='text-start'>Designation</h6>
        
            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="DESIGNATION"
                            value={desig_name}
            />
                    </div>
                    
                    
                </div>
                     <div className='flex'>
                    <div class="mb-1">
                            <h6 className='text-start'>Department</h6>

            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="MOBILE"
                              value={dept_name}
            />
                </div>
                    <div class="mb-1 ml-2">
                            <h6 className='text-start'>Zone Code</h6>

            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="DESIGNATION"
                            value={zone_code}
            />
                    </div>
                    
                    
                </div>
                
   <div className='flex'>
                    <div class="mb-1">
                            <h6 className='text-start'>Dcs Org Code</h6>

            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="MOBILE"
                              value={dcs_org_code}
            />
                </div>
                    <div class="mb-1 ml-2">
                            <h6 className='text-start'>Android ID</h6>

            <input
              type="text"
              class="form-control block w-96 px-4 py-2 text-md font-normal text-white bg-[#1e88e5]  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
                            placeholder="DESIGNATION"
                            value={android_id}
            />
                    </div>
                    
                    
                </div>
                
                      <button type="button"  class="w-32 mb-5 mt-1  px-0  py-3 bg-[#2e7d32] text-white font-md text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  UPDATE 
                </button>
     
            </div>
                 
  





             </div>
            </div>

    );
};

export default Edit;