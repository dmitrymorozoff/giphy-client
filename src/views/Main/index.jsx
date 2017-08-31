import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "../../routes/index";
import Nav from "../../components/Nav/";
import { Container, Divider } from "semantic-ui-react";

export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Nav />
                    {routes}
                </Container>
            </BrowserRouter>
        );
    }
}
