import styles from "./Navigation.module.scss";
import cart       from "/src/assets/icons/navigation/cart.svg";
import deliveries from "/src/assets/icons/navigation/deliveries.svg";
import favourites from "/src/assets/icons/navigation/favourites.svg";
import profile    from "/src/assets/icons/navigation/profile.svg";

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <a href="" className={styles.nav__link}>
                        <img src={cart} alt=""/>
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="" className={styles.nav__link}>
                        <img src={deliveries} alt=""/>
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="" className={styles.nav__link}>
                        <img src={favourites} alt=""/>
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="" className={styles.nav__link}>
                        <img src={profile} alt=""/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
