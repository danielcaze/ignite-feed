import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://source.unsplash.com/random"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/danielcaze.png" />
                <strong>Daniel Cazé</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}