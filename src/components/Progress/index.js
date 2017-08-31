import React from "react";
import { Progress } from "semantic-ui-react";

const styles = {
    progress: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress" style={styles.progress}>
                <Progress percent={11} />
            </div>
        );
    }
}
