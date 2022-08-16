import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/assets/logo.png" alt="Logo" className={styles.image} />
            <strong className={styles.strong}>ignite feed</strong>
        </header>
    );
};