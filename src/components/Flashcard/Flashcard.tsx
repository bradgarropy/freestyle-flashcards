import Image from "next/image"
import {UnsplashImage} from "pages/api/unsplash"
import {FC, useEffect} from "react"

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

    return (
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

            {image ? (
                <p>
                    Photo by{" "}
                    <a
                        href={`${image.profile}?${unsplashUTM}`}
                        className={styles.link}
                    >
                        {image.user}
                    </a>{" "}
                    on{" "}
                    <a
                        href={`https://unsplash.com?${unsplashUTM}`}
                        className={styles.link}
                    >
                        Unsplash
                    </a>
                    .
                </p>
            ) : (
                <p></p>
            )}

            <p className={styles.word}>{word}</p>

            <button className={styles.next} onClick={onNext}>
                tap for another word
            </button>
        </div>
    )
}

export default Flashcard
