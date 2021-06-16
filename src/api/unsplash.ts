import {UnsplashImage} from "pages/api/unsplash"

const getImage = async (query: string): Promise<UnsplashImage> => {
    const response = await fetch("/api/unsplash", {
        method: "POST",
        body: JSON.stringify({query}),
        headers: {"Content-Type": "application/json"},
    })

    const data = await response.json()
    return data
}

export {getImage}
