import { Button, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const All_info = ({ d }) => {
    
    const { NAME, EMP_CODE, EMP_DESIG,EMP_DESIG_CODE, EMP_DEPT, DEPT_CODE, EMP_MOBILE, ZONE_CODE_N,
    ZONE_NAME_N,SC_CODE_N,SC_NAME_N,success} = d;

    const [zone_info, Setzoninfo] = useState(['']);
    const [branch_info, Setbranchinfo] = useState(['']);
    // console.log(branch_info);
    //   const {OFF_NAME,OFF_CODE } = zone_info;
    // console.log(OFF_NAME,OFF_CODE);

       const clearState = () => {
        Setzoninfo('')
        Setbranchinfo('')
  
    }
    
    const [type, setOption] = useState('EKOK');
    console.log(type);
    function handleChange(event) {
    setOption(event.target.value)
    }

 const [z_type, setZ_Option] = useState('');
    // console.log(z_type);
    function zone_change(event) {
    setZ_Option(event.target.value)
    }

      useEffect(() => {
     fetch(`http://202.164.213.67/Digital_pr/PR-permission/branch_name.php?PTYPE=${type}&&ZONE_CODE=179`)
            .then(Response => Response.json())
              .then(data => Setbranchinfo(data['BRANCH_NAME']));
          
          
         
     });

    useEffect(() => {
     fetch(`http://202.164.213.67/Digital_pr/pr-permission/zone_name.php?PTYPE=${type}`)
            .then(Response => Response.json())
            .then(data => Setzoninfo(data['ZONE_NAME']));
        
         
    });

     
  var today = new Date();
    var ddd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = ddd + '-' + mm + '-' + yyyy;


    return (
        <div>
            
                 <p></p>
            <div className='p-5 sm:h-full shadow-2xl  lg:h-full  bordered  lg:p-8 '>
                <form >

                        <div className='mt-0  flex'>
                        <TextInput
                            className='lg:w-full w-full mb-2 rounded  '
                            id="user_id"
                            value={NAME}
                            required={true}
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
                            className='lg:w-96  lg:ml-2 rounded'
                            id="user_id"
                            value={EMP_CODE}
                            required={true}
                            />
                 
                    </div>

                    <div className='mt-3 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            value={EMP_DESIG}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 rounded'
                            id="user_id"
                            value={EMP_DEPT}
                            required={true}
                            />
                    </div>
                    <div className='mt-3 flex'>
                            <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            value={DEPT_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 rounded'
                            id="user_id"
                            value={EMP_MOBILE}
                            required={true}
                            />
                    </div>

                      <div className="flex text-center text-dark align-items-center ml-0 mt-2 lg:w-full">
                            <select className="text-dark lg:w-1/2 shadow bg-success rounded p-2 pl-1 " name='option' onChange={handleChange}>
                                <option >Select PRJ</option>
                                <option className="text-left" value="EKOK">EKOK</option>
                                <option className="text-left" value="SB">SB</option>
                        </select>
                   
                      
                    </div>

                             <div className='mt-1'>
                                <select className="text-dark lg:w-full shadow bg-success rounded p-2  " name='z_option' onChange={zone_change}>
                                <option className='pl-1'>Select ZONE</option>
                              
                                    <>
                                    {
                                        
                                     zone_info.length === 0 ? <p className='text-center'>Loading.. </p> :
                                        zone_info.map((item, index) => {
                                        // console.log(item);
                                        return (
        
                                            <option >{item.OFF_NAME +"-"}{ item.OFF_CODE}</option>
                                    
                                        )
                                    })}
                                    </>
                            </select>
                           </div>

                            <div className="flex text-center text-dark align-items-center ml-0 mt-2 ">
                                <select className="text-dark lg:w-full w-24  shadow bg-success rounded p-2 pl-2 ">
                                <option className='pl-1'>Select BRANCH</option>
                              
                                    <>
                                    {
                                        
                                     branch_info.length === 0 ? <p className='text-center'>Loading.. </p> :
                                     branch_info.map((item, index) => {
                                        // console.log(item);
                                        return (
        
                                            <option key={index}>{item.OFF_NAME +"-"}{ item.OFF_CODE}</option>
                                    
                                        )
                                    })}
                                    </>
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
                            className='lg:w-96  lg:ml-2 rounded'
                            id="user_id"
                            value={ZONE_NAME_N}
                            required={true}
                            />
                    </div>

                       <div className='mt-2 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            value={SC_CODE_N}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 rounded'
                            id="user_id"
                            value={SC_NAME_N}
                            required={true}
                            />
                    </div>
                         <div className='mt-2 flex'>
                          <TextInput
                            className='lg:w-96  rounded'
                            id="user_id"
                            type='date'
                           
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 rounded'
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