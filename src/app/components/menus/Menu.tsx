import React from 'react'
import Game from '../game'
import MenuBet from './menu-bet'
import MenuGame from './menu-game'
import MenuHand from './menu-hand'

export enum MenuType {
  MenuGame,
  MenuHand,
  MenuBet,
  MenuDeckType,
  MenuDeckCount,
}

interface IPropsType {
  game: Game
}

/**
 * Menu class
 * Renders the menu components
 */
class Menu extends React.Component<IPropsType, object> {
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
      <>
        {(() => {
          switch (this.game.currentMenu) {
            case MenuType.MenuGame:
              return <MenuGame game={this.game} />
            case MenuType.MenuHand:
              return <MenuHand game={this.game} />
            case MenuType.MenuBet:
              return <MenuBet game={this.game} />
          }
        })()}
      </>
    )
  }
}

export default Menu
