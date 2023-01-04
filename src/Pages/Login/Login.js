import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import image from '../Assets/login_banner.jpg';
import logo from '../Assets/filic.png';
import About from '../About';
import Home from '../Home';
const Login = () => {

    const [userinfo, setUserinfo] = useState('');


    const info = { userinfo };
    console.log(info);



    const confirm_btn = (event) => {

        event.preventDefault();
        const userid = event.target.user_id.value;
        const password = event.target.password.value;

        // const url = 'https://digitalpr.fareastlife.com/api/login';
        fetch(`http://202.164.213.67/digital_pr/pr-permission/login.php?EMP_CODE=${userid}&&PASSWORD=${password}`)
            .then(Response => Response.json())
            .then(data => setUserinfo(data));

    }
    





    return (
         <div className='lg:px-48 lg:py-12 lg:mb-12 lg:mt-5  items-center'>
            <div class="shadow-xl lg:py-8 rounded-md grid lg:grid-cols-2 gap-0  justify-center">
                
                <div className='flex items-center justify-center'>
                 <img src={image} alt="" />
                </div>
                <div className=' px-12 py-2'>
                    <div className='flex items-center justify-center '>
                        <img className='h-28 shadow-md rounded-full p-2' src={logo} alt="" />
                    </div>
                
                   <form  onSubmit={confirm_btn} className="flex flex-col gap-2">
                        <div>
                            <div className="mb-1 text-start">
                            <Label>UserID</Label>
                            </div>
                            <TextInput
                            id="user_id"
                            type="number"
                            placeholder="UserID"
                            required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 text-start  block">
                            <Label 
                            htmlFor="password1"
                            value="Your password"
                            placeholder="Password"
                            />
                            </div>
                            <TextInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            required={true}
                            />
                        </div>
                        <div className="flex mb-2 items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                            Remember me
                            </Label>
                        </div>
                        <Button className='mb-2' color="success" type="submit">
                            Submit
                        </Button>

                       
                        </form>

                </div>

                
                <div>
                        {
                userinfo.length === 0 ? <p className='text-center'> </p> :
                userinfo.map(info => <About key={info.id} info={info}></About>)

                    }
                    
         
                </div>
                </div>

        </div>
    );
};

export default Login;