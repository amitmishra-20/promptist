import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const isAuth=false;

  return (
    <>
    {
        isAuth?(<Navigate to= "/" />):(
            <section className="flex items-center w-full h-full justify-center relative">
              <img src="authImg.png" className="w-full h-full absolute object-cover  " />
              <div className="absolute w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#00000045_40%,#6533ee90_100%)]"></div>
                <div className="glassEffect p-14 rounded-lg lg:w-2/6">
                <Outlet/>
                </div>
            </section>
        )
    }
    </>
  )
}

export default AuthLayout