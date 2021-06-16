import type {NextApiRequest, NextApiResponse} from "next"
import {createApi} from "unsplash-js"

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
})

export type UnsplashImage = {
    image: string
    description: string
    user: string
    profile: string
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<UnsplashImage>,
): Promise<void> => {
    const unsplashResponse = await unsplash.search.getPhotos({
        query: req.body.query,
        perPage: 1,
        orientation: "landscape",
    })

    const response: UnsplashImage = {
        image: unsplashResponse.response.results[0].urls.regular,
        description: unsplashResponse.response.results[0].description,
        user: unsplashResponse.response.results[0].user.name,
        profile: unsplashResponse.response.results[0].user.links.html,
    }

    res.status(200).json(response)
}

export default handler
