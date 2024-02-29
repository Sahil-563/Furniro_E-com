import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center font-display">
        <div className="w-[43%] hidden lg:block">
          <div className="h-full relative">
            <img
              className="absolute h-full w-full"
              src={SignUpImg}
              alt="SignUp img"
            />
          </div>
        </div>
        <div className="lg:w-[57%] w-full bg-slate-100 ">
          <div className="lg:pr-11 px-8">
            <p className="pt-10 text-end font-light ">
              have an account?{" "}
              <span className="text-emerald-400 font-semibold ">
                <Link to="/SignIn">Sign In!</Link>
              </span>
            </p>
            <div className="flex pt-16 flex-col items-center align-middle">
              <p className="font-semibold text-2xl">Get Started With Makers</p>
              <p className="text-[#7E7E7E]">Getting started is easy</p>
              <div className="flex gap-3 pt-10">
                <button className="bg-transparent hover:bg-slate-200 py-2 px-4 border-2 border-green-500 hover:border-transparent rounded">
                  <div className="flex items-center gap-1">
                    <FcGoogle size={"30px"} />
                    <p>Google</p>
                  </div>
                </button>
                <button className="bg-transparent hover:bg-slate-200 py-2 px-4 border-2 border-green-500 hover:border-transparent rounded">
                  <div className="flex items-center gap-1">
                    <FaFacebook size={"30px"} />
                    <p>Facebook</p>
                  </div>
                </button>
              </div>
              <div className="flex w-full justify-center items-center pt-3 pb-4">
                <span className="w-2/12 h-[1.6px] bg-[#DBDBDB]"></span>
                <span className="mx-2">or continue with</span>
                <span className="w-2/12 h-[1.6px] bg-[#DBDBDB]"></span>
              </div>

              <form className="md:w-1/2 w-full">
                <div className="mb-4">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-[75px] border border-gray-300 rounded-[12px] py-2 px-5 focus:outline-none focus:border-green-500"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-[75px] border border-gray-300 rounded-[12px] py-2 px-5 focus:outline-none focus:border-green-500"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full h-[75px] border border-gray-300 rounded-[12px] py-2 px-5 pr-10 focus:outline-none focus:border-green-500"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <div className="text-[#B8B8B8]">
                        <BiSolidShow size={"30px"} />
                      </div>
                    ) : (
                      <div className="text-[#B8B8B8]">
                        <BiHide size={"30px"} />
                      </div>
                    )}
                  </button>
                </div>
                <div className="mb-4 relative">
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full h-[75px] border border-gray-300 rounded-[12px] py-2 px-5 pr-10 focus:outline-none focus:border-green-500"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={handleToggleConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <div className="text-[#B8B8B8]">
                        <BiSolidShow size={"30px"} />
                      </div>
                    ) : (
                      <div className="text-[#B8B8B8]">
                        <BiHide size={"30px"} />
                      </div>
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  className="rounded-[10px] w-full bg-[#20DC49] text-black h-[70px] py-2 px-4 rounded focus:outline-none "
                >
                  Create Account
                </button>
              </form>
            </div>
            <p className="text-[#5A5A5A] text-center pt-12 pb-20">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
