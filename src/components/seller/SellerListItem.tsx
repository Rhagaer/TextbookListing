import * as React from "react";
import { User } from "../../model/User";
import { ListItem, ListItemIcon, ListItemAvatar, Avatar, ListItemText, CardHeader, Card } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person"
import * as s from "./SellerList.css"

interface IProps {
    seller: User
}

export const SellerListItem = () => (

    <ListItem button divider>
        <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary="Tamir Shklaz"
            secondary= {<p><b>R420</b> - Condition: Acceptable </p>}
        />
    </ListItem>
);