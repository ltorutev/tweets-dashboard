import { useState } from "react";
import './SendTweet.scss';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import {TWEETS_STORAGE} from "../utils/constants";

export default function SendTweet({setToastProps, allTweets}){
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }

    const sendTweet = (event, {name, tweet}) => {
        event.preventDefault()
        if(!name || !tweet){
            setToastProps({
                open:true,
                text:"Pon algo!!!"
            })
        }else {
            allTweets.push({name, tweet, date: moment()})
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
            console.log("Tweet enviado")
            setToastProps({
                open:true,
                text:"Bien hecho!!!"
            })
            closeModal()
        }
    }

    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="add"
                onClick={openModal}
            >
                <AddIcon/>
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet}/>
            </ModalContainer>
        </div>
    )
}