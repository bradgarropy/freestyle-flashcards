import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

jest.mock(
    "next/head",
    () =>
        function Head({children}) {
            return <>{children}</>
        },
)

jest.mock(
    "next/image",
    () =>
        function Image({src, alt}) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} />
        },
)
