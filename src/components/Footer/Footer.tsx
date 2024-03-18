function Footer() {
  return (
    <>
      <div className="h-auto border-t-2">
        <div className="px-[20px] lg:px-[100px] py-10">
          <div className="lg:flex justify-between font-semibold text-lg">
            <div className="flex items-center flex-col lg:block lg:w-[350px] ">
              <p className="text-2xl font-bold">Furniro</p>
              <p className="font-semibold text-[#9F9F9F] pt-[20px] text-center lg:text-left lg:pt-[40px]">
                {" "}
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div>
              <p className="text-[#9F9F9F] hidden lg:block ">Links</p>
              <ul className="flex lg:justify-center justify-evenly gap-6 lg:block">
                <li className="pt-[40px] text-center lg:text-left">Home</li>
                <li className="pt-[40px] text-center lg:text-left">Shop</li>
                <li className="pt-[40px] text-center lg:text-left">About</li>
                <li className="pt-[40px] text-center lg:text-left">Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-[#9F9F9F] hidden lg:block ">Help</p>
              <ul className="flex lg:justify-center justify-evenly lg:block">
                <li className="pt-[40px] text-center lg:text-left">
                  Payment Options
                </li>
                <li className="pt-[40px] text-center lg:text-left">Returns</li>
                <li className="pt-[40px] text-center lg:text-left">
                  Privacy Policy
                </li>
                <li className="pt-[40px] text-center lg:text-left">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[#9F9F9F] hidden lg:block">Newsletter</p>
              <div className="flex justify-center gap-4 pt-[40px]">
                <input
                  className=" border-black lg:w-full w-3/5 text-base font-normal placeholder-gray-400 focus:outline-none border-b-2"
                  type="text"
                  placeholder="Enter Your Email Address"
                />
                <button className="border-b-2 border-black text-base font-semibold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-full  border-t-2 mt-10"></div>
          <p className="font-semibold text-lg pt-10 text-center lg:text-left">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
