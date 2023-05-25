import styles from './Sidebar.module.css'

import { PencilSimpleLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1598599462728-02161125ad0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar} 
                    src="https://github.com/onerbreno.png" 
                />

                <strong>Breno Dias</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} weight='bold' />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}