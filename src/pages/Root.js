import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/footer";
const RootPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const RootAction=async({request})=>{
  const data= await request.formData();
  const email= data.get('email');
  console.log(email);
  return ()=>{};
}
export {RootAction};
export default RootPage;