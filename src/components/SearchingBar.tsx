import { Icon, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import React, { useRef } from "react";
import useGameQueryStore from "../store/store";

const SearchingBar = () => {
  const setSearchText = useGameQueryStore(state => state.setSearchText);
  const ref = useRef<any>('');

  function submitDataSearch (e : React.FormEvent) {
    e.preventDefault();
    if(ref.current.value === '') return;
    setSearchText(ref.current.value);
  }
    return <form onSubmit={submitDataSearch}><InputGroup startElement={<Icon ml={'10px'} ><BsSearch /></Icon>} width={'100%'} >
    <Input placeholder="Search games..." borderRadius={20} variant={'subtle'} colorPalette={'blue'} fontSize={{base : 12 , sm : 15}} ref={ref}/>
  </InputGroup>
  </form>
};
export default SearchingBar; 