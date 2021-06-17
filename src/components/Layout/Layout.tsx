import Header from "components/Header"
import {FC} from "react"

import styles from "./Layout.module.css"

const Layout: FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
        </div>
    )
}

export default Layout
