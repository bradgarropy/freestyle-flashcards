import Flashcard from "components/Flashcard"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Flashcard />)
    expect(screen.getByText("Flashcard"))
})
