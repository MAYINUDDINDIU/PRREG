import { Button, Table } from 'flowbite-react';
import React from 'react';

const Show_info = ({ reg_info }) => {
    const { NAME,EMP_CODE,MOB_NO } = reg_info;
    return (
 
        <div className='flex'>
    
            <Button className='w-48 mt-1' color="success">
                {NAME}
            </Button>
            <h2>{EMP_CODE}</h2>
            <h2>{ MOB_NO}</h2>
        </div>
        


    );
};

export default Show_info;