import Head from "next/head"
import {FC} from "react"

type TwitterProps = {
    card?: string
    site?: string
    title?: string
    description?: string
    image?: string
}

const Twitter: FC<TwitterProps> = ({
    card = "summary",
    site = "@bradgarropy",
    title = "freestyle flashcards",
    description = "🎤 freestyle flashcards",
    image = "https://freestyle-flashcards.vercel.app/twitter.png",
}) => {
    return (
        <Head>
            <meta name="twitter:card" content={card} />
            <meta name="twitter:site" content={site} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}

export default Twitter
