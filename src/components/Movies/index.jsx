import React from "react";
import CardItem from "../../components/CardItem/index";
import { tmdbApi } from "../../api/index";
import { Grid, Image } from "semantic-ui-react";
const styles = {
    grid: {
        matginTop: '0'
    }
};

const Movies = props => {
    return (
        <Grid doubling columns={4} style={styles.grid}>
            {props.data.data.map((item, index) => {
                return (
                    <Grid.Column>
                        <CardItem
                            title={item.title}
                            src={`${tmdbApi.baseImageUrl + item.poster_path}`}
                            desc={item.overview}
                            key={index}
                            releaseDate={item.release_date}
                            rating={item.vote_average}
                            id={item.id}
                        />
                    </Grid.Column>
                );
            })}
        </Grid>
    );
};

export default Movies;
