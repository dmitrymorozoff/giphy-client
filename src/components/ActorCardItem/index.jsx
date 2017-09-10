import React from "react";
import { Card, CardTitle, CardActions } from "react-mdl";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie.js";
import { bindActionCreators } from "redux";

const styles = {
    card: {
        background: "#273247",
        minWidth: "220px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    }
};

export default class ActorCardItem extends React.Component {
    render() {
        return (
            <Card
                shadow={0}
                style={{
                    width: "256px",
                    height: "256px",
                    background: `url(${this.props.src}) center / cover`,
                    margin: "auto"
                }}
            >
                <CardTitle expand />
                <CardActions
                    style={{
                        height: "52px",
                        padding: "16px",
                        background: "rgba(0,0,0,0.2)"
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontSize: "14px",
                            fontWeight: "500"
                        }}
                    >
                        {this.props.name}
                    </span>
                </CardActions>
            </Card>
        );
    }
}
