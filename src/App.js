import React, {useEffect, useState} from 'react'
import Header from "./components/Header"
import { Container, Snackbar} from "@mui/material"
import SendTweet from './components/SendTweet'
import {TWEETS_STORAGE} from "./components/utils/constants";
import ListTweets from "./components/ListTweets";
function App() {
    const [toastProps, setToastProps] = useState({
        open: false,
        text: null
    })
    const [allTweets, setAllTweets] = useState([])
    const [reloadTweets, setReloadTweets] = useState(false)
    useEffect(() => {
        const tweets = localStorage.getItem(TWEETS_STORAGE)
        setAllTweets(tweets ? JSON.parse(tweets): [])
        setReloadTweets(false)
    }, [reloadTweets])
    const deleteTweet = (index) => {
        allTweets.splice(index, 1)
        setAllTweets(allTweets)
        localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
        setReloadTweets(true)
    }
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header/>
        <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
        <Snackbar
            anchorOrigin={{
                vertical:"top",
                horizontal: "right"
            }}
            open={toastProps.open}
            autoHideDuration={1000}
            message={<span id="message-id">{toastProps.text}</span>}
        />
    </Container>
  );
}

export default App;
