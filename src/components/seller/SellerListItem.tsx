import * as React from "react";
import { User } from "../../model/User";
import { ListItem, ListItemIcon, ListItemAvatar, Avatar, ListItemText, CardHeader, Card } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person"
import * as s from "./SellerList.css"
import { Listing } from "../../model/Listing";

interface IProps {
    seller: User
    listing: Listing
}

export const SellerListItem = (props: IProps) => (

    <ListItem button divider>
        <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={props.seller.name}
            secondary={"R " + props.listing.price + "- Condition: " + props.listing.description}
        />
    </ListItem>
);