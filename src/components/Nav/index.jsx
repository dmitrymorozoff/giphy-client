import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item name="editorials">
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item name="reviews">
                    <Link to="/top">Top Movies</Link>
                </Menu.Item>
                <Menu.Item name="upcomingEvents">
                    <Link to="/popular">Popular Movies</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
