import { Box,Flex, Grid, GridItem } from "@chakra-ui/react";
import GridGames from "../components/GridGames";
import NameSectionGames from "../components/NameSectionGames";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
    return (
        <Grid 
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
      >
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
    );
}
export default HomePage;