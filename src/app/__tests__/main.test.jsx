import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Game from "@/app/components/game"

describe('MainPage', () => {
    it('renders the game page', () => {
        const {asFragment} = render(<Game/>)

        const player = screen.getByTestId('player', {exact: true})
        const dealer = screen.getByTestId('dealer', {exact: true})

        expect(player).toBeInTheDocument()
        expect(dealer).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
