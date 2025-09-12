import styles from "../snippet/Snippet.module.scss";


export const Badge = ({data, classNames}) => {
    return (
        <div className={classNames.join(' ')}>{data.text}</div>
    );
};
