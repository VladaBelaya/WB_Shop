import { useWindowWidth } from "../../../hooks/useWindowWidth";
import styles             from './Header.module.scss';
import Navigation         from "../../features/navigation/Navigation";
import search             from "/src/assets/icons/navigation/search.svg";
import Search             from "../../features/search/Search";

function Header() {
    const isMobile = useWindowWidth();
    return (
        <header className={styles.header}>
            <a href="" className={styles.logo}>магаз</a>
            {!isMobile && <Search />}
            {!isMobile
                ? <Navigation />
                : <button className="header__search-button">
                    <img src={search} alt="Поиск"/>
                </button>
            }
        </header>
    );
}

export default Header;
