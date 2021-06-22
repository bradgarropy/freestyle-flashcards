import Link from "@bradgarropy/next-link"
import Image from "next/image"
import {FC, MouseEventHandler} from "react"

import styles from "./Header.module.css"

const Header: FC = () => {
    const onClick: MouseEventHandler<HTMLAnchorElement> = event => {
        event.stopPropagation()
    }

    return (
        <header className={styles.header}>
            <Link to="https://harrymackofficial.com" onClick={onClick}>
                <Image
                    src="/harry-mack.png"
                    alt="harry mack logo"
                    width={1500}
                    height={750}
                />
            </Link>
        </header>
    )
}

export default Header
