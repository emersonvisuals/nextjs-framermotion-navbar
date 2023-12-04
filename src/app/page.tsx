import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div>
                <h1>welcome stanger.</h1>
                <p>click on that burger menu.</p>
            </div>
        </main>
    );
}
