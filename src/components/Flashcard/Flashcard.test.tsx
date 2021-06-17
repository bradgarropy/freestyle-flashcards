import userEvent from "@testing-library/user-event"
import Flashcard from "components/Flashcard"
import {mockImage, mockWord} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

import {unsplashUTM} from "./Flashcard"

jest.mock(
    "next/image",
    () =>
        function Image({src, alt}) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} />
        },
)

describe("flashcard", () => {
    let onNextMock

    beforeEach(() => {
        onNextMock = jest.fn()

        render(
            <Flashcard word={mockWord} image={mockImage} onNext={onNextMock} />,
        )
    })

    test("shows image", () => {
        expect(screen.getByAltText(mockImage.description))
    })

    test("credits photographer", () => {
        expect(screen.getByText(mockImage.user)).toHaveAttribute(
            "href",
            `${mockImage.profile}?${unsplashUTM}`,
        )

        expect(screen.getByText("Unsplash")).toHaveAttribute(
            "href",
            `https://unsplash.com?${unsplashUTM}`,
        )
    })

    test("shows word", () => {
        expect(screen.getByText(mockWord))
    })

    test("gets next word", () => {
        userEvent.click(screen.getByText("tap for another word"))
        expect(onNextMock).toHaveBeenCalledTimes(1)
    })
})
