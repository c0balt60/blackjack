import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Menu from "@/app/components/Menu"
import Game from "@/app/components/game"

describe("DealButton", () => {
    it('generates cards', () => {
        const {} = render(<Game/>)
        const {getByTestId} = render(<Menu />)

        fireEvent.click(getByTestId('deal-btn'))

        expect()
    })
})
