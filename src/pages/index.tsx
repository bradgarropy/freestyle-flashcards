import SEO from "@bradgarropy/next-seo"
import {getImage} from "api/unsplash"
import BuiltBy from "components/BuiltBy"
import Flashcard from "components/Flashcard"
import Layout from "components/Layout"
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
            <SEO title="FREESTYLE FLASHCARDS" />
            <Flashcard image={image} word={word} onNext={onNext} />
            <BuiltBy />
        </Layout>
    )
}

export default IndexPage
