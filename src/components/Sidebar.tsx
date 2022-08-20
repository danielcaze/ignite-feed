import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://source.unsplash.com/random"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/danielcaze.png" />
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