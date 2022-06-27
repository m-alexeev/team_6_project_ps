import React from "react";
import { Instantiator } from "../models/Instantiator";
import {Container} from 'native-base'
interface Props{

}

const ShoppingList: React.FC<Props> = () => {
    Instantiator.createStoreStructure()
    const items = Instantiator.items;

    return(
        <Container>

        </Container>
    )
}

export default ShoppingList;