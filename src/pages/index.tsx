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
    const [image, setImage] = useState<UnsplashImage>()
    const [word, setWord] = useState<string>(randomWords())

    useEffect(() => {
        const execute = async () => {
            const image = await getImage(word)
            setImage(image)
        }

        execute()
    }, [word])

    const onNext = async () => {
        const newWord = randomWords()
        const newImage = await getImage(word)

        setImage(newImage)
        setWord(newWord)
    }

    return (
        <Layout>
            <Meta title="next starter" />
            <Facebook />
            <Twitter />

            <Flashcard image={image} word={word} onNext={onNext} />
        </Layout>
    )
}

export default IndexPage
