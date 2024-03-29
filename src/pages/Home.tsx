import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/homePageImages/heroImg.jpeg";

function Home() {
  const isLogin: boolean = true;
  const navigate = useNavigate();

  useEffect(() => {
    const CheckUserLogin = () => {
      if (!isLogin) {
        navigate("/SignUp");
      }
    };

    CheckUserLogin();
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat bg-center h-[800px] overflow-auto w-full"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-[#fff3e369] md:bg-[#FFF3E3]  md:h-[420px] md:w-[680px] w-full h-full backdrop-blur-md md:backdropbackdrop-blur-0 lock md:absolute bottom-[120px] right-14 rounded-lg">
          <div className="px-[20px] py-[20px]">
            <p>New Arrival</p>
            <p>Discover Our New Collection</p>
            <p>
              hsdhf khsdfhsjhadf hshdfhsadf hshdfsd khsdfhs hsafhdks
              kjshdafkjhsad hsdfkjhsakjd kjsadhfjksahd jkasdhfsa kjhsfsjah
              kjhdfas asjdfhsja skfnd
            </p>
            <button className="w-[200px] h-[80px] bg-[#B88E2F]">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
