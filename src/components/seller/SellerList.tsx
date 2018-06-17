import * as React from "react"
import { List, ListItemSecondaryAction } from "@material-ui/core";
import { SellerListItem } from "./SellerListItem";

export const SellerList = () => {

  
    let sellerListItems = []
    for(let i = 0; i < 30; i++){
        sellerListItems.push(<SellerListItem/>)
    }

    
    return(<List>
       {sellerListItems}
    </List>);

};



