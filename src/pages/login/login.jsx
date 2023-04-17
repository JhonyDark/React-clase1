import React from "react";
import Title from "./components/title/title";
import './login.scss';

const Login = () =>{
    return(
        <div className="image w-full h-full">
            <div className="bg-[#0E1B21] w-[539px] h-[741px] right-0 absolute mt-[80px] mr-[10%] rounded-[50px] p-12 opacity-70">
                <div className="w-[446px] h-[46px] bg-black text-white flex justify-between p-3">
                    <Title text='Bienvenido al ARTE' />
                    <Title text='soy un titulo2' />
                </div>
            </div>
        </div>
    )
};

export default Login;