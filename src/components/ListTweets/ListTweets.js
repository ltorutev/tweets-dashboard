import { Grid } from '@mui/material';
import './ListTweets.scss'
import Tweet from "../Tweet";

export default function ListTweets({allTweets, deleteTweet}){
    if(!allTweets || allTweets.length === 0){
        return(
            <div className="list-tweets-empty">
                <h2>No hay Tweets...</h2>
            </div>
        )
    }
    return (
        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) =>
                <Grid key={index} items xs={4}>
                    <Tweet item={tweet} index={index} deleteTweet={deleteTweet}/>
                </Grid>
            )}
        </Grid>
    )
}