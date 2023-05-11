
import './Header.css';
import { ReactComponent as Logo } from '../../img/logo.svg'
import { ReactComponent as Heart } from '../../img/heart.svg'
import { ReactComponent as GitHub } from '../../img/github-logo.svg'
import { ReactComponent as Tg } from '../../img/telegram-logo.svg'
function Header() {

    return (
        <header className='header'>
            <div className="container">
                <Logo className='header__logo' />
                <div className='header__title'>
                    <h1>Бэкенд-разработчик.</h1>
                    <p>Я&nbsp;<span className='header__heart'><Heart /></span>&nbsp;PHP</p>
                </div>
                <div className="header__contacts">
                    <div className="header__contacts-git">
                        <GitHub />
                        <a className='header__contacts-link' target='_blank' rel="noopener noreferrer" href="https://github.com/VladislavChe">GitHub</a>
                        <span className='header__contacts-gray-text'>https://github.com/VladislavChe</span>
                    </div>
                    <div className="header__contacts-tg">
                        <Tg />
                        <a target='_blank' rel="noopener noreferrer" className='header__contacts-link' href="https://t.me/L0R39Z0">Telegram</a>
                        <span className='header__contacts-gray-text'>@L0R39Z0</span>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;