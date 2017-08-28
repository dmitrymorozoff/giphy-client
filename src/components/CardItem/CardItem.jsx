import "./card-item.css";
import React from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class CardItem extends React.Component {
    render() {
        return (
            <Card style={{ width: "220px", margin: "10px" }}>
                <CardMedia>
                    <img src={this.props.src} alt={this.props.title} />
                </CardMedia>
                <CardTitle
                    title={this.props.title}
                    subtitle={this.props.releaseDate}
                />
                <CardText
                    style={{
                        maxHeight: "55px",
                        overflow: "hidden",
                        lineHeight: "1.8"
                    }}
                >
                    {this.props.desc}
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        );
    }
}
