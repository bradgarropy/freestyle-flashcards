import Head from "next/head"
import {FC} from "react"

type FacebookProps = {
    url?: string
    type?: string
    title?: string
    description?: string
    image?: string
}

const Facebook: FC<FacebookProps> = ({
    url = "https://freestyle-flashcards.vercel.app",
    type = "website",
    title = "freestyle flashcards",
    description = "🎤 freestyle flashcards",
    image = "https://freestyle-flashcards.vercel.app/facebook.png",
}) => {
    return (
        <Head>
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}

export default Facebook
