import React from "react";
import google from '../../../images/google logo.png'
import facebook from '../../../images/facebook logo.png'
import git from '../../../images/GitH logo.png'

const SocialLogin = () => {
  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '30px'}} src={google} alt=''/>
         <span className="px-2">  Google Sing IN</span>
      </div>
      <div className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '35px'}} src={facebook} alt=''/>
         <span className="px-2">  Facebook Sing IN</span>
      </div>
      <div className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '30px'}} src={git} alt=''/>
         <span className="px-2">  Github Sing IN</span>
      </div>
    </div>
  );
};

export default SocialLogin;
