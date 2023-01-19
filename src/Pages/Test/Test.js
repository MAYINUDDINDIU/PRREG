import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const Test = () => {

    // const { NAME,EMP_CODE } = emp_i;
    //    console.log(NAME);

    const [tdata, setTdata] = useState([]);
    console.log(tdata);

        const handleAdded = event => {
        event.preventDefault();
        // const policy_no = (event.target.pol_no.value);
        // console.log(policy_no);
        // if (policy_no < 10) {
        //     setError('Policy Number no longer than 10 character')
        //     return;
        // }

        // console.log(policy_no);
            
            const emp_code = '00005942';   
            const password = '123456';  
            const android_id = '5942';    
            const addItem = { emp_code, password, android_id };
            console.log(addItem);

        const url = 'https://digitalpr.fareastlife.com/api/login';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)

        })
            .then(Response => Response.json())
            .then(data => setTdata(data['user']));
           
    }





    return (
  
           <div class="modal-dialog  relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-md pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
         Welcome For Edit PR Permission
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
                            <p>Welcome For Edit PR Permission</p>
                            

                            
            <div className='p-3 sm:h-full shadow-2xl  lg:h-full  bordered  lg:p-8 '>
                <form >

                    <div className="mb-2 block text-start">
                                        
                   
                        {/* <Label className=''
                        value="EMP NAME"
                      /> */}
                        <TextInput
                            className='lg:w-full w-full lg:mb-2 font-bold text-black  mb-1 rounded'
                            id="name_id"
                            // value={NAME}
                            disabled
                            required={true}
                            bg-gray-500 bg-clip-padding
                           
                        />
                          
                    </div>

                    <div className='mt-0  flex'>
                           <TextInput
                            className='lg:w-96  rounded '
                            id="desig_code"
                            // value={EMP_DESIG_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_code"
                            // value={EMP_CODE}
                            required={true}
                            />
                 
                    </div>

                    <div className='lg:mt-3 mt-1 flex'>
                          <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="emp_desig"
                            // value={EMP_DESIG}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_dept"
                            // value={EMP_DEPT}
                            required={true}
                            />
                    </div>
                    <div className='lg:mt-3 mt-1 flex'>
                            <TextInput
                            className='lg:w-96 w-48  rounded'
                            id="dept_code"
                            // value={DEPT_CODE}
                            required={true}
                        />
                             <TextInput
                            className='lg:w-96  lg:ml-2 ml-1 rounded'
                            id="emp_mobile"
                            // value={EMP_MOBILE}
                            required={true}
                            />
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
                            type="text"
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
                      
                          {/* <Button className='mb-2 w-full' onClick={test} color="success" type="submit">
                            Submit
                        </Button> */}
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

    </div>
  </div>
     
    );
};

export default Test;