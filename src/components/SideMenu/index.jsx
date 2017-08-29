import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

const styles = {
    sideMenu: {
        width: "100%"
    },
    paper: {
        background: "#1f1e24"
    }
};

export default class SideMenu extends React.Component {
    render() {
        return (
            <div className="sidemenu" style={styles.sideMenu}>
                <Paper style={styles.paper}>
                    <Menu>
                        <MenuItem
                            containerElement={<Link to="/home" />}
                            primaryText="Home"
                        />
                        <MenuItem
                            
                            containerElement={<Link to="/movies" />}
                            primaryText="Movies"
                        />
                        <MenuItem primaryText="TV" />
                        <MenuItem primaryText="Actors" />
                    </Menu>
                </Paper>
                <Paper style={styles.paper}>
                    <Menu>
                        <MenuItem primaryText="News" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Paper>
            </div>
        );
    }
}
