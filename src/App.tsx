import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GridGames from "./components/GridGames";
import NameSectionGames from "./components/NameSectionGames";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import Footer from "./components/Footer";


export interface GameQuery { 
  genreId? : number,
  platformId? : number,
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
        <GridItem area="aside" paddingX={3} display={{base : 'none' , lg : 'block'}}>
          <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenre={(genreId) => setGameQuery({ ...gameQuery, genreId})} />
        </GridItem>
      <GridItem area="main" padding={3} >
        <Box paddingLeft={2}>
          <NameSectionGames selectedGenreId={gameQuery.genreId} />
          <Flex marginBottom={4} wrap={'wrap'} gap={2}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatformId={(platformId) => setGameQuery({ ...gameQuery, platformId}) } />
            <SortSelector sortOrder={gameQuery.sortOrder} SendOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </Flex>
        </Box>
        <GridGames gameQuery={gameQuery} />
      </GridItem>
    </Grid>
    </Container>
    <Footer />
    </>
  );
}

export default App;
