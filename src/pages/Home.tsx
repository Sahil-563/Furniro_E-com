import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <h1>Home Page</h1>
    </>
  );
}

export default Home;
