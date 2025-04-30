import React from 'react'
import Game from '../game'

interface IPropsType {
  game: Game
}

/**
 * Menu for updating your bet amount
 */
class MenuBet extends React.Component<IPropsType, object> {
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
      <form onSubmit={this.game.updateBet}>
        <div className='input-group get-bet'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>$</span>
          </div>
          <input
            type='text'
            name='betValue'
            className='form-control'
            defaultValue={this.game.currentBet / 100.0}
          />
          <button className='btn btn-dark'>Update</button>
        </div>
      </form>
    )
  }
}

export default MenuBet
