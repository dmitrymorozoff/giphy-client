import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "../../routes/index";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import {
    Layout,
    Header,
    HeaderRow,
    Textfield,
    Navigation,
    Drawer,
    Content
} from "react-mdl";
import { Link } from "react-router-dom";
export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header waterfall hideTop style={{ background: "#23283f" }}>
                        <HeaderRow title="The Movie Database">
                            <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search3"
                                expandable
                                expandableIcon="search"
                            />
                        </HeaderRow>
                        <HeaderRow>
                            <Navigation>
                                <Link to="/home">Home</Link>
                                <Link to="/top">Top Movies</Link>
                                <Link to="/popular">Popular Movies</Link>
                                <a href="#">Actors</a>
                            </Navigation>
                        </HeaderRow>
                    </Header>
                    <Drawer
                        title="TMDb"
                        style={{
                            background: "#23283f",
                            border: "none",
                            color: "#fff"
                        }}
                    >
                        <Navigation>
                            <Link to="/home">Home</Link>
                            <Link to="/top">Top Movies</Link>
                            <Link to="/popular">Popular Movies</Link>
                            <a href="#">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content>{routes}</Content>
                </Layout>
            </BrowserRouter>
        );
    }
}
