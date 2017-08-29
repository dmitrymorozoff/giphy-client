import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";

const styles = {
    appBar: {
        backgroundColor: "#1f1e24"
    },
    title: {
        color: "#fff"
    }
};

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="The Movie Database (TMDb)"
                    style={styles.appBar}
                    titleStyle={styles.title}
                    showMenuIconButton={false}
                >
                    {" "}
                </AppBar>
            </div>
        );
    }
}
