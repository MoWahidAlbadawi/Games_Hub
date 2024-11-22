import { Icon, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import React, { useRef } from "react";
interface Props {
  onSearch : (searchText : string) => void;
} 
const SearchingBar = ({onSearch} : Props) => {
  const ref = useRef<any>('');

  function submitDataSearch (e : React.FormEvent) {
    e.preventDefault();
    if(ref.current.value === '') return;
    onSearch(ref.current.value);
    
  }
    return <form onSubmit={submitDataSearch}><InputGroup width={'100%'}>
    <Input placeholder="Search games..." pl={2} borderRadius={20} variant={'subtle'} colorPalette={'blue'} fontSize={{base : 12 , sm : 15}}/>
  </InputGroup>
  </form>
};
export default SearchingBar; 