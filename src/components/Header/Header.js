import './Header.scss'
import TwitterLogo from '../../assets/images/twitter-logo.png'

export default function Header() {
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Tweets dashboard"/>
            <h1> Tweets Dashboard</h1>
        </div>
    )
}