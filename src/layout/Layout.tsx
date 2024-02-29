import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
type layoutPropsType = {
  children: React.ReactNode;
};
function Layout({ children }: layoutPropsType) {
  return (
    <>
      <Header />
      <div className="h-screen">{children}</div>

      <Footer />
    </>
  );
}

export default Layout;
