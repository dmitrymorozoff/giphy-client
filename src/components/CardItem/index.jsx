import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import { connect } from "react-redux";
import { getInfoAboutMovie } from "../../actions/index";

const styles = {
    card: {
        background: "#21263C"
    },
    desc: {
        height: "60px",
        overflow: "hidden",
        color: "#7F8094",
        lineHeight: "25px",
        fontWeight: "600",
        fontSize: '13px'
    },
    btn: {
        color: "#fff",
        fontWeight: "600"
    }
};

//onClick={this.handleReadMoreClick.bind(this)}
class CardItem extends React.Component {
    handleReadMoreClick() {
        console.log(this.props.info);
        this.props.getInfoAboutMovie(this.props.id);
    }
    render() {
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
                    <Button style={styles.btn}>Get Started</Button>
                </CardActions>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        info: state.info
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getInfoAboutMovie: id => {
            dispatch(getInfoAboutMovie(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
