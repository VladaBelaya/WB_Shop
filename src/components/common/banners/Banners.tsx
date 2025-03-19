import useFetchData     from "../../../hooks/useFetchData";
import {useWindowWidth} from "../../../hooks/useWindowWidth";
import styles from './Banners.module.scss';

type BannersData = {
    banners: Banner[];
}

type Banner = {
    id: number;
    srcDesktop: string;
    srcMobile: string;
    alt: string;
    href: string;
}

type Response = {
    data: BannersData;
}

function Banners() {
    const { data, loading }: Response = useFetchData('/data/banners.json');
    const isMobile = useWindowWidth();

    if (loading) return <div className={styles.banners}></div>;

    return (
        <ul className={styles.banners}>
            {data && data.banners.map((banner) => (
                <li key={banner.id}>
                    <a href={banner.href}>
                        <img src={isMobile ? banner.srcMobile : banner.srcDesktop} alt={banner.alt} />
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default Banners;
