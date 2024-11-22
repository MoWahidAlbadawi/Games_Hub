import noImage from '../assets/no-image-placeholder.webp'
const getSmallerImage = (url : string) => {
    if(!url) return noImage;
    const index = url.indexOf('games/');
    return `${url.slice(0,index)}crop/600/400/${url.slice(index)}`;
} 
export default getSmallerImage;