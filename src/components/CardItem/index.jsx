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

const styles = {
    card: {
        position: "relative",
        width: "250px",
        background: "#1f1e24",
        marginBottom: '45px'
    },
    cardText: {
        maxHeight: "55px",
        overflow: "hidden",
        lineHeight: "1.8"
    }
};

export default class CardItem extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardMedia>
                    <img src={this.props.src} alt={this.props.title} />
                </CardMedia>
                <CardTitle
                    title={this.props.title}
                    subtitle={this.props.releaseDate}
                />
                <CardText style={styles.cardText}>{this.props.desc}</CardText>
                <CardActions>
                    <FlatButton  label="Read more" />
                    <FlatButton label="Info" />
                </CardActions>
            </Card>
        );
    }
}
