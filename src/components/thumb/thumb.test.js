import { render, fireEvent } from "@testing-library/react";
import Thumb from "../thumb";

describe("<Thumb />", () => {
    test("Should Render thumb default type", () => {
        const { getByTestId } = render(<Thumb />)

        expect(getByTestId("thumbs up")).toBeInTheDocument();
        expect(getByTestId("thumbs up")).toHaveClass("thumb-button");
    })

    test("Should Render thumb down type", () => {
        const { getByTestId } = render(<Thumb type="down" />)

        expect(getByTestId("thumbs down")).toBeInTheDocument();
        expect(getByTestId("thumbs down")).toHaveClass("thumb-button");
    })

    test("Should Render thumb and isSelected", () => {
        const { getByTestId } = render(<Thumb type="down" isSelected={true} />)

        expect(getByTestId("thumbs down")).toBeInTheDocument();
        expect(getByTestId("thumbs down")).toHaveClass("thumb-button--selected");
    })

    test("Should Render thumb and fireEvent Click", () => {
        const spyClick = jest.fn();
        const { getByTestId } = render(<Thumb type="down" onClick={spyClick} />)

        expect(getByTestId("thumbs down")).toBeInTheDocument();
        fireEvent.click(getByTestId("thumbs down"))
        expect(spyClick).toBeCalled();
    })
})