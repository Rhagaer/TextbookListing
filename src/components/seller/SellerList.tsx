import * as React from "react"
import { List, ListItemSecondaryAction, ListSubheader } from "@material-ui/core";
import { SellerListItem } from "./SellerListItem";
import * as styles from "./SellerList.css"

export const SellerList = () => {


    let sellerListItems = []
    for (let i = 0; i < 30; i++) {
        sellerListItems.push(<SellerListItem />)
    }


    return (
        <div className={styles.listContainer}>
            <List>
            
                {sellerListItems}
            </List>
        </div>);

};



