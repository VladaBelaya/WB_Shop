import useFetchData from "../../../hooks/useFetchData";
import styles from './Categories.module.scss';

type CategoriesData = {
    categories: Category[];
}

type Category = {
    id: number;
    src: string;
    name: string;
}

type Response = {
    data: CategoriesData;
}

function Categories() {
    const { data }: Response = useFetchData('/data/categories.json');

    return (
        <ul className={styles.categories}>
            {data && data.categories.map((category) => (
                <li key={category.id}>
                    <a href="">
                        <img src={category.src} alt={category.name}/>
                        <div>{category.name}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Categories;
