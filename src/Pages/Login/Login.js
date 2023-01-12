import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../Assets/login_banner.jpg';
import logo from '../Assets/filic.png';
import About from '../About';
import Home from '../Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [astatement, setaStatement] = useState(['']);
    // const [statement, setStatement] = useState([]);
    // console.log(statement);
   const navigate = useNavigate();
        
    
    const { emp_code, status, name, desig_name, dept_name, zone_code,div_code } = astatement;
    // console.log(emp_code, status, name, desig_name, dept_name, zone_code,div_code);
    // console.log(result);
    // console.log(name);



    // const confirm_btn = (event) => {

    //     event.preventDefault();
    //     const userid = event.target.user_id.value;
    //     const password = event.target.password.value;

    //     // const url = 'https://digitalpr.fareastlife.com/api/login';
    //     fetch(`http://202.164.213.67/digital_pr/pr-permission/login.php?EMP_CODE=${userid}&&PASSWORD=${password}`)
    //         .then(Response => Response.json())
    //         .then(data => setUserinfo(data));

    // }


        const handleAdded = event => {
        event.preventDefault();
        const emp_code = event.target.user_id.value;
        const password = event.target.password.value;
        const android_id = '5942';
        
              
            const addItem = { emp_code, password, android_id };
            // console.log(addItem);

        const url = 'https://digitalpr.fareastlife.com/api/login';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)

        })
            .then(Response => Response.json())
                .then(data => setaStatement(data['user']));
                   
    }

    
    useEffect(() => {
        if (status === 1) {
            console.log('success');
            navigate(`/home=${emp_code}`);
          
        } else {
            // alert('Please type proper user id & pass');
             toast.error(`Opps!Please type proper emp code & password`);
        }
    });


    return (
        
        <div className='lg:px-48 lg:py-12 lg:mb-12 lg:mt-5  items-center'>
              {/* <ToastContainer /> */}
            <div>
                 
            </div>
          
            <div class="shadow-xl lg:py-8 rounded-md grid lg:grid-cols-2 gap-0  justify-center">
                  
                <div className='flex items-center justify-center'>
                 <img src={image} alt="" />
                </div>
                <div className=' px-12 py-2'>
                    <div className='flex items-center justify-center '>
                        <img className='h-28 shadow-md rounded-full p-2' src={logo} alt="" />
                    </div>
                
                   <form  onSubmit={handleAdded} className="flex flex-col gap-2">
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

{/*                 
                <div>
                        {
                astatement.length === 0 ? <p className='text-center'> </p> :
                astatement.map(info => <About key={info.id} info={info}></About>)

                    }
                    
         
                </div> */}
                </div>

        </div>
    );
};

export default Login;