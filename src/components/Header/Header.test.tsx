import Header from "components/Header"
import {render, screen} from "test-utils/render"

test("shows header", () => {
    render(<Header />)

    const logo = screen.getByAltText("harry mack logo")
    const link = logo.parentElement

    expect(logo)
    expect(link).toHaveAttribute("href", "https://harrymackofficial.com")
})
