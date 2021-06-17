import {getImage} from "api/unsplash"
import Facebook from "components/Facebook"
import Flashcard from "components/Flashcard"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Twitter from "components/Twitter"
import randomWords from "random-words"
import {FC, useEffect, useState} from "react"

import {UnsplashImage} from "./api/unsplash"

const IndexPage: FC = () => {
    const [word, setWord] = useState<string>()
    const [image, setImage] = useState<UnsplashImage>()

    useEffect(() => {
        onNext()
    }, [])

    const onNext = async () => {
        const newWord = randomWords()
        const newImage = await getImage(newWord)

        setImage(newImage)
        setWord(newWord)
    }

    return (
        <Layout>
            <Meta title="FREESTYLE FLASHCARDS" />
            <Facebook />
            <Twitter />

            <Flashcard image={image} word={word} onNext={onNext} />
        </Layout>
    )
}

export default IndexPage
