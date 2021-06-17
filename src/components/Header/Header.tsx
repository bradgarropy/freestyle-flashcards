import Image from "next/image"
import Link from "next/link"
import {FC} from "react"

import styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <a
                href="https://harrymackofficial.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/harry-mack.png"
                    alt="harry mack logo"
                    width={1500}
                    height={750}
                />
            </a>
        </header>
    )
}

export default Header
