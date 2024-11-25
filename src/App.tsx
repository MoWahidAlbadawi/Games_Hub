import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GridGames from "./components/GridGames";
import NameSectionGames from "./components/NameSectionGames";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./Hooks/usePlatform";
import { Genre } from "./Hooks/useGeneres";
import Footer from "./components/Footer";


export interface GameQuery { 
  genre: Genre | null;
  platform: Platform | null;
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
        {/* <GridItem area="aside" paddingX={3} display={{base : 'none' , lg : 'block'}}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
        </GridItem> */}
      {/* <GridItem area="main" padding={3} >
        <Box paddingLeft={2}>
          <NameSectionGames selectedGenre={gameQuery.genre} />
          <Flex marginBottom={4} wrap={'wrap'} gap={2}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
            <SortSelector sortOrder={gameQuery.sortOrder} SendOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </Flex>
        </Box>
        <GridGames gameQuery={gameQuery} />
      </GridItem> */}
    </Grid>
    </Container>
    <Footer />
    </>
  );
}

export default App;
