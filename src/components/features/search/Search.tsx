import styles from "./Search.module.scss";

function Search() {
    return (
        <form className={styles.search} action="/search" method="GET">
            <label className={styles.search__label} htmlFor="search"></label>
            <input className={styles.search__input} id="search" type="text" name="search" placeholder="Поиск товаров" />
            <div style={{display: 'none', position: 'absolute'}}>
                <ul></ul>
                Компонент с категориями
            </div>
        </form>
    );
}

export default Search;
