import React from "react";
import CardItem from "../../components/CardItem/index";
import { tmdbApi } from "../../api/index";
import { Grid, Cell } from "react-mdl";
const styles = {
    grid: {
        justifyContent: "center",
        width: '80%',
        margin: '0 auto'
    },
    cell:{

        display: 'flex',
        justifyContent: 'center'
    }
};

const Movies = props => {
    return (
        <Grid className="grid-ruler" style={styles.grid}>
            {props.data.data.map((item, index) => {
                return (
                    <Cell col={2} tablet={4} phone={12} style={styles.cell}>
                        <CardItem
                            title={item.title}
                            src={`${tmdbApi.baseImageUrl + item.poster_path}`}
                            desc={item.overview}
                            key={index}
                            releaseDate={item.release_date}
                            rating={item.vote_average}
                            id={item.id}
                        />
                    </Cell>
                );
            })}
        </Grid>
    );
};

export default Movies;
