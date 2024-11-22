import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"
  import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const arrSortOrder = [
{value : '' , label : 'Relevance'},
{value : '_added' , label : 'Date added'},
{value : 'name' , label : 'Name'},
{value : '_released' , label : 'Release Date'},
{value : '_metacritic' , label : 'Popularity'},
{value : '_rating' , label : 'Average'},
];

interface Props {
    SendOrder : (order : string) => void,
    sortOrder : string
}

const SortSelector =  ({SendOrder , sortOrder} : Props) => {
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
            {arrSortOrder.map((order) => <MenuItem padding={'3px'} ml='3pxx' key={order.value} value={order.value}
            onClick={() => SendOrder(order.value)}>{order.label}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
};
export default SortSelector;