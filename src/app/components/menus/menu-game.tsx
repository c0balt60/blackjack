import React from 'react'
import Game from '../game'

interface IPropsType {
  game: Game
}

/**
 * Display pre-game options
 */
class MenuGame extends React.Component<IPropsType, object> {
  public game: Game

  constructor(props: IPropsType) {
    super(props)
    this.game = props.game
  }

  public render() {
    if (this.game === null) {
      return null
    }

    return (
      <div className='menu-buttons'>
        <div className='btn btn-dark' data-testid='deal-btn' onClick={this.game.dealNewHand}>
          Deal
        </div>
        <div className='btn btn-dark' onClick={this.game.getNewBet}>
          Bet
        </div>
      </div>
    )
  }
}

export default MenuGame
