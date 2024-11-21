import { Footer, Navbar } from "@components/common"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <div className="">
        <Navbar />
        <div className="wrapper min-h-svh">
          <Outlet />

        </div>
        <Footer />
    </div>
  )
}

export default MainLayout