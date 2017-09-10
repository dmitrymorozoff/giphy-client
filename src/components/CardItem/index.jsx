import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie.js";
import { bindActionCreators } from "redux";

const styles = {
    card: {
        background: "#273247",
        minWidth: "220px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    },
    desc: {
        height: "60px",
        overflow: "hidden",
        color: "#54617A",
        lineHeight: "25px",
        fontSize: "14px",
        marginBottom: "10px"
    },
    btn: {
        color: "#fff"
    }
};

//onClick={this.handleReadMoreClick.bind(this)}
class CardItem extends React.Component {
    handleReadMoreClick() {
        this.props.fetchMovie(this.props.id);
    }
    render() {
        console.log(this.props.id);
        return (
            <Card shadow={0} style={styles.card}>
                <CardTitle
                    style={{
                        color: "#fff",
                        height: "256px",
                        background: `url(${this.props.src}) center / cover`
                    }}
                >
                    {this.props.title}
                </CardTitle>
                <CardText style={styles.desc}>{this.props.desc}</CardText>
                <CardActions border>
                    <Button
                        style={styles.btn}
                        onClick={() => this.handleReadMoreClick()}
                    >
                        Read more
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movieReducer
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchMovie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
