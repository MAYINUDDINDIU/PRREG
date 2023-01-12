import { Button, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
const All_info = ({ d }) => {


    const { NAME, EMP_CODE, EMP_DESIG,EMP_DESIG_CODE, EMP_DEPT, DEPT_CODE, EMP_MOBILE, ZONE_CODE_N,
        ZONE_NAME_N, SC_CODE_N, SC_NAME_N, success } = d;
    
   const [project, setProject] = useState([]);
   const [prjid, setprjid] = useState('');
   const prj_name = prjid;
   const [country, setCountry] = useState([]);
   const [countryid, setCountryid] = useState('');
   const z_name = countryid;
   const [stetes, setSat] = useState([]);

    const [zone_info, Setzoninfo] = useState(['']);
    const [branch_info, Setbranchinfo] = useState(['']);


    const [type, setOption] = useState('EKOK');

    function handleChange(event) {
    setOption(event.target.value)
    }


    useEffect(() => {
    const getPRJ = async () => {
      const req = await fetch('prj.json');
      const getres = await req.json();
      // console.log(getres);
      setProject(await getres['PRJ_NAME']);

    }
    getPRJ();


  }, []);

  const handleprj = (event) => {
    const prjid = event.target.value;
    setprjid(prjid);
    event.preventDefault();
  }
 

    
      useEffect(() => {
    const getcountry = async () => {
      const req = await fetch(`http://202.164.213.67/Digital_pr/pr-permission/zone_name.php?PTYPE=${prj_name}`);
      const getres = await req.json();
      // console.log(getres);
      setCountry(await getres['ZONE_NAME']);

    }
    getcountry();


  }, [prjid]);
    
     const handlecountry = (event) => {
         const getcoutryid = event.target.value;
           const myArray = getcoutryid.split(" ");
    const z_code = (myArray[1]);
    setCountryid(z_code);
    event.preventDefault();
    }
    
      useEffect(() => {

    const getstate = async () => {
      const resstate = await fetch(`http://202.164.213.67/Digital_pr/PR-permission/branch_name.php?PTYPE=${prj_name}&&ZONE_CODE=${z_name}`);
      const getst = await resstate.json();

      setSat(await getst['BRANCH_NAME']);

    }
    getstate();

  }, [countryid]);
    

    const [z_type, setZ_Option] = useState('');
    let text =z_type;
    const myArray = text.split(" ");
    const z_code = (myArray[1]);
    function zone_change(event) {
    setZ_Option(event.target.value)
    }


    // useEffect(() => {
    //  fetch(`http://202.164.213.67/Digital_pr/pr-permission/zone_name.php?PTYPE=${type}`)
    //         .then(Response => Response.json())
    //         .then(data => Setzoninfo(data['ZONE_NAME']));
        
         
    // });



    // useEffect(() => {
    //  fetch(`http://202.164.213.67/Digital_pr/PR-permission/branch_name.php?PTYPE=${type}&&ZONE_CODE=${z_code}`)
    //         .then(Response => Response.json())
    //         .then(data => Setbranchinfo(data['BRANCH_NAME']));
            
    //  });

     
    // var today = new Date();
    // var ddd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = ddd + '-' + mm + '-' + yyyy;



    return (
        <div>
               
            {/* <p>{ today}</p> */}
            <div className='p-3 sm:h-full shadow-2xl  lg:h-full  bordered  lg:p-8 '>
                <form >

                        <div className='mt-0  flex '>
                        <TextInput
                            className='lg:w-full w-full lg:mb-2 font-bold text-black  mb-1 rounded'
                            id="user_id"
                            value={NAME}
                            disabled
                            required={true}
                            bg-gray-500 bg-clip-padding
                           
                        />
                          
                    </div>

                    <div className='mt-0  flex'>
                           <TextInput
                            className='lg:w-96  rounded '
                            id="user_id"
                            value={EMP_DESIG_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={EMP_CODE}
                            required={true}
                            />
                 
                    </div>

                    <div className='lg:mt-3 mt-1 flex'>
                          <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="user_id"
                            value={EMP_DESIG}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={EMP_DEPT}
                            required={true}
                            />
                    </div>
                    <div className='lg:mt-3 mt-1 flex'>
                            <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="user_id"
                            value={DEPT_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={EMP_MOBILE}
                            required={true}
                            />
                    </div>

                      <div className="flex text-center text-dark align-items-center ml-0 mt-2 lg:w-full ">
                            <select className="text-dark lg:w-1/2 w-full shadow bg-success rounded p-2 pl-1 " onChange={(e) => handleprj(e)}>
                            <option >Select PRJ</option>
                             {
                                    project.map((getcon) => (
                                    <option key={getcon.country_id} value={getcon.country_id}>  {getcon.PRJ_NAME}</option>
                                    ))
                                }
             
                        </select>
                 
                    </div>

                             <div className='mt-1'>
                                <select className="text-dark lg:w-full w-full shadow bg-success rounded p-2  " onChange={(e) => handlecountry(e)}>
                                <option className='pl-1'>Select ZONE</option>
                              
                                        {
                                    country.map((getcon) => (
                                    <option key={getcon.country_id} value={getcon.country_id}> {getcon.OFF_NAME+"-"}  {getcon.OFF_CODE}</option>
                                    ))
                                }
                            </select>
                           </div>

                            <div className="flex text-center text-dark align-items-center ml-0 mt-2 ">
                                <select className="text-dark lg:w-full w-full  shadow bg-success rounded p-2 pl-2 ">
                                <option className='pl-1'>Select BRANCH</option>
                              
                                   {
                                    stetes.map((st, index) => (
                                    <option key={index} value={st.state_id}>{st.OFF_NAME}</option>
                                    ))
                                }
                            </select>
                           </div>
                    

                    <div className='mt-2 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            value={ZONE_CODE_N}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={ZONE_NAME_N}
                            required={true}
                            />
                    </div>

                       <div className='lg:mt-2 mt-1 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            value={SC_CODE_N}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={SC_NAME_N}
                            required={true}
                            />
                    </div>
                         <div className='lg:mt-2 mt-1 flex'>
                          <TextInput
                            className='lg:w-full w-full  rounded'
                            id="user_id"
                            type='date'
                            placeholder='Date'
                            required={true}
                        />
                             <TextInput
                            className='lg:w-full w-full  lg:ml-2 ml-1 rounded'
                            id="user_id"
                            value={SC_NAME_N}
                            required={true}
                            />
                    </div>
                    <div className='text-center mt-3'>
                           <Button className='mb-2 w-full' color="success" type="submit">
                            Submit
                        </Button>
                      </div>
                      
                  
                </form>

                {/* <button onClick={notify}>Notify !</button> */}
                {/* <ToastContainer /> */}

                {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={`"${NAME},${EMP_CODE},${EMP_DESIG},${EMP_DEPT}"`}
                        viewBox={`0 0 256 256`}
                    />
                </div> */}
            </div>


        </div>
    );
};

export default All_info;