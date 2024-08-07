import { Route, Routes } from "react-router-dom"
import SignIn from "./_auth/auth/SignIn"
import { Home } from "./_root/pages"
import SignUp from "./_auth/auth/SignUp"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        </Route>
        <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App