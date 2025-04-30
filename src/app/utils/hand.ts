import Card from '../components/card'
import Game from '../components/game'

// Enums for states
export enum Status {
  Unknown,
  Won,
  Lost,
  Push,
}
export enum CountMethod {
  Soft,
  Hard,
}

/**
 * Hand class
 * Container for a single players cards
 */
class Hand {
  public game: Game
  public cards: Card[] = []
  public stood: boolean = false
  public played: boolean = false

  constructor(game: Game) {
    this.game = game
  }

  public dealCard(): void {
    if (this.game === null) {
      return
    }

    const card = this.game.shoe.getNextCard()
    if (card === undefined) {
      return
    }

    this.cards.push(card)
  }
}

export default Hand
