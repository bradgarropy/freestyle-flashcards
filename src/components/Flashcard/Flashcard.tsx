import Link from "@bradgarropy/next-link"
import Image from "next/image"
import {UnsplashImage} from "pages/api/unsplash"
import {FC, MouseEventHandler, useEffect} from "react"

import styles from "./Flashcard.module.css"

type FlashcardProps = {
    image: UnsplashImage
    word: string
    onNext: () => void
}

const unsplashUTM = "utm_source=freestyle-flashcards&utm_medium=referral"

const Flashcard: FC<FlashcardProps> = ({image, word, onNext}) => {
    useEffect(() => {
        window.addEventListener("click", () => onNext())
        return window.removeEventListener("click", onNext)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onClick: MouseEventHandler<HTMLAnchorElement> = event => {
        event.stopPropagation()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.flashcard}>
                {image ? (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={image.image}
                            alt={image.description}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ) : (
                    <div className={styles.placeholder} />
                )}

                <p
                    className={styles.credit}
                    style={{visibility: image ? "visible" : "hidden"}}
                >
                    Photo by{" "}
                    <Link
                        to={`${image?.profile}?${unsplashUTM}`}
                        className={styles.link}
                        onClick={onClick}
                    >
                        {image?.user}
                    </Link>{" "}
                    on{" "}
                    <Link
                        to={`https://unsplash.com?${unsplashUTM}`}
                        className={styles.link}
                        onClick={onClick}
                    >
                        Unsplash
                    </Link>
                    .
                </p>

                <p className={styles.word}>{word}</p>

                <button className={styles.next}>tap for another word</button>
            </div>
        </div>
    )
}

export default Flashcard
export {unsplashUTM}
