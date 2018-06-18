import * as React from "react"
import { List, ListItemSecondaryAction, ListSubheader } from "@material-ui/core";
import { SellerListItem } from "./SellerListItem";
import * as styles from "./SellerList.css"
import { User } from "../../model/User";
import { Listing } from "../../model/Listing";

interface IProps{
    sellers: User[]
    listings: Listing[]
}

export const SellerList = (props: IProps) => {

    console.log(props.sellers)

    return (
        <div className={styles.listContainer}>
            <List>
                {props.sellers.map((user,index) => (
                    <SellerListItem seller={user} listing={props.listings[index]} />
                ))}
            </List>
        </div>);

};



