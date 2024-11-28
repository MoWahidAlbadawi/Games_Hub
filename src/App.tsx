import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import GridGames from "./components/GridGames";
import NameSectionGames from "./components/NameSectionGames";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import Footer from "./components/Footer";

function App() { 
  return (
    <>
    <Container minHeight='90vh'>
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
        <GridItem area="aside" paddingX={3} display={{base : 'none' , lg : 'block'}}>
          <GenreList />
        </GridItem>
      <GridItem area="main" padding={3} >
        <Box paddingLeft={2}>
          <NameSectionGames />
          <Flex marginBottom={4} wrap={'wrap'} gap={2}>
              <PlatformSelector />
            <SortSelector />
        </Flex>
        </Box>
        <GridGames />
      </GridItem>
    </Grid>
    </Container>
    <Footer />
    </>
  );
}

export default App;
