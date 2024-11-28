import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"
  import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/store";

const arrSortOrder = [
{value : '' , label : 'Relevance'},
{value : '_added' , label : 'Date added'},
{value : 'name' , label : 'Name'},
{value : '_released' , label : 'Release Date'},
{value : '_metacritic' , label : 'Popularity'},
{value : '_rating' , label : 'Average'},
];


const SortSelector =  () => {
    const sortOrder = useGameQueryStore(state => state.gameQuery.sortOrder);
    const onSendOrder = useGameQueryStore(state => state.setSortOrder);
    const labelWordSort = arrSortOrder.find((order) => order.value === sortOrder);
    const sortWord = sortOrder ?  labelWordSort?.label : 'Revelance';
    return <MenuRoot>
        <MenuTrigger>
        <Button variant={'surface'} padding={'10px 20px'}>
           order by : {sortWord}
         <BsChevronDown />
        </Button>
        </MenuTrigger>
        <MenuContent>
            {arrSortOrder.map((order) => <MenuItem padding={'10px'} ml='3px' key={order.value} value={order.value}
            onClick={() => onSendOrder(order.value)}>{order.label}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
};
export default SortSelector;