import React from "react";
import ActorCardItem from "../../components/ActorCardItem/index";
import { tmdbApi } from "../../api/index";
import { Grid, Cell } from "react-mdl";
const styles = {
    grid: {
        justifyContent: "center",
        width: "90%",
        margin: "0 auto"
    },
    cell: {
        display: "flex",
        justifyContent: "center"
    }
};

const ActorsList = props => {
    return (
        <Grid className="grid-ruler" style={styles.grid}>
            {props.data.data.map((item, index) => {
                return (
                    <Cell
                        col={3}
                        tablet={4}
                        phone={12}
                        style={styles.cell}
                        key={index}
                    >
                        <ActorCardItem
                            src={`${tmdbApi.baseImageUrl + item.profile_path}`}
                            name={item.name}
                            key={index}
                        />
                    </Cell>
                );
            })}
        </Grid>
    );
};

export default ActorsList;
