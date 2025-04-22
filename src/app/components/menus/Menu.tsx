import React from 'react'
import Game from '../game'
import MenuBet from './menu-bet'
import MenuDeckCount from './menu-deck-count'
import MenuDeckType from './menu-deck-type'
import MenuGame from './menu-game'
import MenuHand from './menu-hand'
import MenuInsurance from './menu-insurance'
import MenuOptions from './menu-options'

export enum MenuType {
  MenuGame,
  MenuHand,
  MenuBet,
  MenuDeckType,
  MenuDeckCount,
  MenuInsurance,
  MenuOptions,
}

interface IPropsType {
  game: Game
}

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
            case MenuType.MenuOptions:
              return <MenuOptions game={this.game} />
            case MenuType.MenuHand:
              return <MenuHand game={this.game} />
            case MenuType.MenuInsurance:
              return <MenuInsurance game={this.game} />
            case MenuType.MenuBet:
              return <MenuBet game={this.game} />
            case MenuType.MenuDeckCount:
              return <MenuDeckCount game={this.game} />
            case MenuType.MenuDeckType:
              return <MenuDeckType game={this.game} />
          }
        })()}
      </>
    )
  }
}

export default Menu
