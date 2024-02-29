import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiHide, BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import SignUpImg from "../assets/SignUpImg.jpg";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center font-display">
        <div className="lg:w-[57%] w-full bg-slate-100 ">
          <div className="lg:pr-11 px-8">
            <p className="pt-10 text-end font-light ">
              Don’t have an account?{" "}
              <span className="text-emerald-400 font-semibold ">Sign Up!</span>
            </p>
            <div className="flex pt-28 flex-col items-center align-middle">
              <p className="font-semibold text-4xl">Welcome Back</p>
              <p className="text-lg pt-2">Login into your account</p>
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
              <div className="flex w-full justify-center items-center pt-8 pb-8">
                <span className="w-2/12 h-[1.6px] bg-[#DBDBDB]"></span>
                <span className="mx-2">or continue with</span>
                <span className="w-2/12 h-[1.6px] bg-[#DBDBDB]"></span>
              </div>

              <form className="md:w-1/2 w-full">
                <div className="mb-8">
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

                <div className="flex justify-between mb-8 ">
                  <div className="flex">
                    <p>Remeber me</p>
                  </div>
                  <p className="text-[#D93F21]">Recover Password</p>
                </div>

                <button
                  type="submit"
                  className="rounded-[10px] w-full bg-transparent text-black h-[70px] border-[1px] border-black py-2 px-4 rounded focus:outline-none hover:shadow-md"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[43%] hidden lg:block">
          <div className="h-full relative">
            <img
              className="absolute h-full w-full"
              src={SignUpImg}
              alt="SignUp img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
