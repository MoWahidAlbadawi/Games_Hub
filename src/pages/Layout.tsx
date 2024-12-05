import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
    return <>
    <NavBar />
    <Box minHeight={'75vh'}>
        <Outlet />
    </Box>
    <Footer />
    </>
}
export default Layout;