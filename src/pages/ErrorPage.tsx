import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box , Text , Heading } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    return <>
    <NavBar /> 
    <Box padding={6} minHeight={'75vh'}>
        <Heading>Oops ...</Heading>
        <Text>{isRouteErrorResponse(error) ? 'Invalid Page' : 'something went wrong please try agein!'}</Text>
    </Box>
    <Footer />
    </>
}
export default ErrorPage;