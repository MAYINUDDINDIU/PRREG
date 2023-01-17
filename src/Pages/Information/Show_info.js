import { Button, Table, TextInput } from 'flowbite-react';
import React from 'react';

const Show_info = ({ reg_info }) => {
    const { NAME,EMP_CODE,MOB_NO,REG_DATE,DESIG_NAME,DEPT_NAME,ZONE_CODE,DCS_ORG_CODE,ANDROID_ID} = reg_info;
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
                <button type="button" class="w-20 mt-1 ml-1 px-6 ml-1 py-2.5 bg-[#2e7d32] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    EDIT
                </button>
            </div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
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

            <div  className="mb-2 block text-start">
                        {/* <Label className=''
                        value="EMP NAME"
                      /> */}
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
                            // value={EMP_DESIG_CODE}
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
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
   
    <p>Just like that.</p>
      </div>

    </div>
  </div>
</div>


             {/* <Button className='w-20 mt-1 rounded-none ml-1' color='success' >
                EDIT  { EMP_CODE}
            </Button>  */}
            
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