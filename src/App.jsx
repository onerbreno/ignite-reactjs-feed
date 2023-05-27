// JSX = Javascript + XML (HTML)
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Breno"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quidem expedita corrupti. Optio architecto quibusdam in placeat labore earum, tenetur eius expedita vero inventore quam facere sed necessitatibus beatae laborum."
          />
          <Post
            author="Gabriel"
            content="Um novo post..."
          />
        </main>
      </div>
    </div>
  )
}


