import { Link } from "react-router-dom";
import styles from "./Header.module.css";


export function Header(){
    return (
        <header className={styles.container}>
            <div className={styles.content }>
                <h3>vnt<span>/school</span></h3>
                <Link to="/about">Sobre</Link>
            </div>

        </header>
    );
}