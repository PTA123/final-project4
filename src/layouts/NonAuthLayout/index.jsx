import { Outlet } from "react-router"

const NonAuthLayout = () => {
    return(
        <>
        <p>Header</p>
        <Outlet/>
        <p>Footer</p>
        </>
    )
}

export default NonAuthLayout