import useGameTrailer from "../Hooks/useGameTrailer";
interface Props {
    gameId? : number,
}

const GameTrailer = ({gameId} : Props) => {
   const {data} = useGameTrailer(gameId!);
    const first = data?.results[0];
    return first ? <video
    src={first.data[480]}
    poster={first.preview} 
    controls/> : null;
}
export default GameTrailer;