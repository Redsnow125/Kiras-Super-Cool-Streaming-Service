import React from "react";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img alt='' className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/6f5fcbd6-993f-4d76-b207-799c937026ae/US-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4"> 
                <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email"/>
                <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password"/>
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
