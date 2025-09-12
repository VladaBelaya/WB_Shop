import styles  from './Snippet.module.scss';
import { Badge } from '../badge/Badge';

export const Snippet = ({data, type}) => {
    return (
        <article className={styles.snippet}>
            <a href=""></a>
            <div className={styles.topContentWrapper}>
                <div className={styles.badgesWrapper}>
                    <Badge data={data.sale} />
                    <Badge data={data.action} classNames={['autumnSale']} />
                </div>
                <ul className={styles.imagesWrapper}>
                    {data.images.map(image => (
                        <li key={image.id}>
                            <img src={image.src} alt={image.alt} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.textContent}>
                    <h3 className={styles.name}>
                        <span>{data.name}</span>
                        <span>иконка сердца</span>
                    </h3>
                    <p className={styles.description}></p>
                </div>
                <div className={styles.infoPriceRate}>
                    <div className={styles.priceWrapper}>
                        <div className={styles.actualPrice}></div>
                        <div className={styles.oldPrice}></div>
                    </div>
                    <div className={styles.rateWrapper}>
                        {/*Вынести в компонент*/}
                        <div className={styles.rate}>
                            <span></span>
                            <span className={styles.icon}></span>
                        </div>
                        <div className={styles.rate}>
                            <span></span>
                            {/*Вынести в компонент*/}
                            <span className={styles.icon}></span>
                        </div>
                    </div>
                </div>
                <div className={styles.orderWrapper}>
                    <button>В корзину</button>
                    <button className={styles.inFavs}></button>
                </div>
            </div>
        </article>
    );
};
