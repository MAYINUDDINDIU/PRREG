import { Button, Label, TextInput } from 'flowbite-react';
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
  const [branchid, setbaranchid] = useState('');
  const branch_code = branchid;
  // console.log(branch_code);
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
  
  
  
  
     const branch_handler = (event) => {
    const getbid = event.target.value;
    // const myArray = getbid.split(" ");
    // const b_code = (myArray[1]);
    setbaranchid(getbid);
    event.preventDefault();
    }
  
  
    //******Handle post data in database********
    const handleSubmit = event => {
        event.preventDefault();
        const EMP_ID = (event.target.emp_code.value);
        const NAME = (event.target.name_id.value);
        const DEPT_CODE = (event.target.dept_code.value);
        const DEPT_NAME = (event.target.emp_dept.value);
       const DESIG_CODE = (event.target.desig_code.value);
        const DESIG_NAME = (event.target.emp_desig.value);
        // const MOBILE = (event.target.EMP_MOBILE.value);
        // const DATE_ = (event.target.DATE_.value);
        // const FROM_TIME = (event.target.FROM_TIME.value);
        // const END_TIME = (event.target.END_TIME.value);
        // const LEAVE_REASON = (event.target.LEAVE_REASON.value);
        // const STATUS = 'N';


        // toast("Successfully Saved Your Application");

        // console.log(EMP_NAME, emp_id, emp_designation, emp_dept, l_date, l_from_time, l_to_time, reason);
        console.log(NAME, DEPT_CODE,DEPT_NAME, EMP_ID,prj_name,DESIG_CODE,DESIG_NAME,z_name,branch_code);

        // const addItem = {
        //     NAME, DEPT_CODE, DEPT_NAME, DESIG, LEAVE_REASON, EMP_ID, STATUS, FROM_TIME, END_TIME, DATE_
        // };
        // const url = `http://202.164.213.67/mat/short_leave_insert.php`;
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(addItem)
        // })
        //     .then(res => res.json())
        //     .then(result => {

        //         // if (result.status = true) {

        //         //     toast(`${NAME} Successfully Saved Your Application`);
        //         // }
        //         // else {
        //         //     toast.error(`${NAME} Don,t Saved Your Application`)
        //         // }

        //         console.log(result);
        //         event.target.reset()

        //         // Navigate('/');
        //     })
    }
    //******Handle post data in database********
  
  
  
  
    

    // const [z_type, setZ_Option] = useState('');
    // let text =z_type;
    // const myArray = text.split(" ");
    // const z_code = (myArray[1]);
    // function zone_change(event) {
    // setZ_Option(event.target.value)
    // }


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
                <form onSubmit={handleSubmit}>

            <div  className="mb-2 block text-start">
                        <Label className=''
                        value="EMP NAME"
                      />
                        <TextInput
                            className='lg:w-full w-full lg:mb-2 font-bold text-black  mb-1 rounded'
                            id="name_id"
                            value={NAME}
                            disabled
                            required={true}
                            bg-gray-500 bg-clip-padding
                           
                        />
                          
                    </div>

                    <div className='mt-0  flex'>
                           <TextInput
                            className='lg:w-96  rounded '
                            id="desig_code"
                            value={EMP_DESIG_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_code"
                            value={EMP_CODE}
                            required={true}
                            />
                 
                    </div>

                    <div className='lg:mt-3 mt-1 flex'>
                          <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="emp_desig"
                            value={EMP_DESIG}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_dept"
                            value={EMP_DEPT}
                            required={true}
                            />
                    </div>
                    <div className='lg:mt-3 mt-1 flex'>
                            <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="dept_code"
                            value={DEPT_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_mobile"
                            value={EMP_MOBILE}
                            required={true}
                            />
                    </div>

                      <div className="flex text-center text-dark align-items-center ml-0 mt-2 lg:w-full ">
                            <select className="text-dark lg:w-full w-full shadow bg-success rounded p-2 pl-1 " onChange={(e) => handleprj(e)}>
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
                                <select className="text-dark lg:w-full w-full  shadow bg-success rounded p-2 pl-2"  onChange={(e) => branch_handler(e)}>
                                <option className='pl-1'>Select BRANCH</option>
                              
                                   {
                                    stetes.map((st, index) => (
                                      <option key={index} value={st.state_id}>{st.OFF_NAME + "-"}{st.OFF_CODE}</option>
                                      
                                    ))
                                }
                            </select>
                           </div>
                    

                    <div className='mt-2 flex'>
                          <TextInput
                            className='lg:w-96   rounded'
                            id="password"
                                   type="password"
                            placeholder="Type Password"
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="android_id"
                          placeholder="Type Android ID"
                            required={true}
                            />
                    </div>

                       {/* <div className='lg:mt-2 mt-1 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="sc_code"
                            value={SC_CODE_N}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="sc_name"
                            value={SC_NAME_N}
                            required={true}
                            />
                    </div>
                         <div className='lg:mt-2 mt-1 flex'>
                          <TextInput
                            className='lg:w-full w-full  rounded'
                            id="datee"
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
                    </div> */}
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