import Image from "next/image"
import {FC} from "react"

import styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Image
                src="/harry-mack.png"
                alt="harry mack logo"
                width={1500}
                height={750}
            />
        </header>
    )
}

export default Header
