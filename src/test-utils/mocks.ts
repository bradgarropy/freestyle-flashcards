import {UnsplashImage} from "pages/api/unsplash"

const mockWord = "rapper"

const mockImage: UnsplashImage = {
    image: "https://images.unsplash.com/rapper.png",
    description: "rapper with microphone",
    user: "Harry Mack",
    profile: "https://unsplash.com/@harrymack",
}

const mockMeta = {
    title: "freestyle flashcards",
}

const mockFacebook = {
    url: "https://freestyle-flashcards.vercel.app",
    type: "website",
    title: "freestyle flashcards",
    description: "🎤 freestyle flashcards",
    image: "https://freestyle-flashcards.vercel.app/facebook.png",
}

const mockTwitter = {
    card: "summary",
    site: "@bradgarropy",
    title: "freestyle flashcards",
    description: "🎤 freestyle flashcards",
    image: "https://freestyle-flashcards.vercel.app/twitter.png",
}

export {mockFacebook, mockImage, mockMeta, mockTwitter, mockWord}
