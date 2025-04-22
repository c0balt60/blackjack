import React from 'react'
import Card from './card'
import Game from './game'
import Hand, { CountMethod } from '../lib/hand'

/**
 * DealerHand container
 * Contains dealers cards
 */
class DealerHand extends React.Component {
  public hideDownCard: boolean = true
  public hand: Hand
  public game: Game

  constructor(game: Game) {
    super(game)
    this.game = game
    this.hand = new Hand(game)
  }

  // Render the cards
  public render() {
    return (
      <div
        className={`${Game.isLinux() ? 'linux' : ''}${
          Game.isWindoze() ? 'windoze' : ''
        }`}
      >
        {this.displayHand().cards.map((card) => {
          return card.render()
        })}
        <div className='count black'>⇒ {this.getValue(CountMethod.Soft)}</div>
      </div>
    )
  }

  // Generate the cards
  public displayHand(): Hand {
    const h = new Hand(this.game)
    for (let x = 0; x < this.hand.cards.length; x++) {
      h.cards.push(
        x === 1 && this.hideDownCard
          ? new Card({ value: 13, suitValue: 0 })
          : this.hand.cards[x]
      )
    }
    return h
  }

  public upCardIsAce(): boolean {
    return this.hand.cards[0].isAce()
  }

  public isBusted(): boolean {
    return this.getValue(CountMethod.Soft) > 21
  }

  public getValue(countMethod: CountMethod): number {
    let v = 0
    let total = 0

    for (let x = 0; x < this.hand.cards.length; x++) {
      if (x === 1 && this.hideDownCard) {
        continue
      }

      const tmpValue = this.hand.cards[x].props.value + 1
      v = tmpValue > 9 ? 10 : tmpValue

      if (countMethod === CountMethod.Soft && v === 1 && total < 11) {
        v = 11
      }

      total += v
    }

    if (countMethod === CountMethod.Soft && total > 21) {
      return this.getValue(CountMethod.Hard)
    }

    return total
  }
}

export default DealerHand
