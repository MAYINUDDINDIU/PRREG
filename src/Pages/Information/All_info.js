import { Button, TextInput } from 'flowbite-react';
import React from 'react';

const All_info = ({ d }) => {
    
    const { NAME, EMP_CODE, EMP_DESIG, EMP_DEPT, DEPT_CODE, EMP_MOBILE, ZONE_CODE_N,
    ZONE_NAME_N,SC_CODE_N,SC_NAME_N,success} = d;

    const status = success;

    if (status==="0") {
        // alert("Please type proper emp id"); 

    }
           

  
    console.log(success);
  var today = new Date();
    var ddd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = ddd + '-' + mm + '-' + yyyy;


    return (
           <div>
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
                            value={NAME}
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