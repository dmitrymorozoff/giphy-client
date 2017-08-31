import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { getInfoAboutMovie } from "../../actions/index";

//onClick={this.handleReadMoreClick.bind(this)}
class CardItem extends React.Component {
    handleReadMoreClick() {
        console.log(this.props.info);
        this.props.getInfoAboutMovie(this.props.id);
    }
    render() {
        return (
            <Card>
                <Image src={this.props.src} />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Description>{this.props.desc}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button color="yellow">Read more</Button>
                    </div>
                </Card.Content>
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
