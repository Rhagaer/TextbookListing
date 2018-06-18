import * as React from "react";
import { Textbook } from "../../model/Textbook";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";


interface IProps {
  textbook: Textbook;
  withName?: boolean;
}

const style = {
  container: {
    display: "flex",
    margin: 16
  },

  content: {},

  image: {
    height: 300,
    width: 256
  }
};

export const TextbookDetail = (props: IProps) => (
  <Card style={style.container}>
    <CardMedia src={props.textbook.image}>
      <img src={props.textbook.image} alt="" />
    </CardMedia>
    <CardContent>

      <Typography variant="title">{props.textbook.name}</Typography>

      <Typography variant={"subheading"}>{props.textbook.author}</Typography>
      <Typography variant={"body2"}>
        {props.textbook.isbn}
      </Typography>
    </CardContent>
  </Card>
);
