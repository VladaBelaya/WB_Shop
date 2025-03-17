import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023&nbsp;Магаз</p>
            <div className={styles.footer__links}>
                <a href="mailto:support@magaz.ru">support@magaz.ru</a>
                <ul className={styles.footer__networks}>
                    <li>
                        <a target="_blank" href="https://web.telegram.org/">
                            <img src="/src/assets/icons/networks/tg.svg" alt="Telegram"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://dzen.ru/">
                            <img src="/src/assets/icons/networks/dzen.svg" alt="Dzen"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://rutube.ru/">
                            <img src="/src/assets/icons/networks/youtube.svg" alt="RUTUBE"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
