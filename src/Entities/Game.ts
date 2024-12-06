import Genre from "./Genre";
import Publisher from "./Publisher"
import Platform from "./Platform";
interface Game {
    id : number,
    name : string,
    background_image : string,
    parent_platforms : {platform : Platform}[],
    metacritic : number,
    rating_top : number,
    slug : string,
    description : string,
    genres : Genre[],
    publishers : Publisher[],
}
export default Game;