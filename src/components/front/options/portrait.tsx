import React from 'react';
import CreaturePortraitSelect from './portrait/creature';
import CustomPortraitSelect, { CustomPortrait } from './portrait/custom';
import DeathcardPortraitSelect, { Deathcard } from './portrait/deathcard';

export type PortraitData = {
  type: 'custom',
  data: {
    common?: string,
    gbc?: string,
  }
} | {
  type: 'deathcard',
  data: {
    head: 'chief' | 'enchantress' | 'gravedigger' | 'prospector' | 'robot' | 'settlerman' | 'settlerwoman' | 'wildling',
    eyes: number,
    mouth: number,
    lostEye: boolean,
  }
} | {
  type: 'creature',
  creature: string,
}

type Props = {
  onValueChange: (portrait?: PortraitData) => void
}

type State = {
  selected: 'custom' | 'deathcard' | 'creature' | 'none'
  custom: CustomPortrait,
  deathcard: Deathcard,
  creature: string,
}
export default class Portrait extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selected: 'none',
      custom: {},
      deathcard: {
        head: 'chief',
        mouth: 0,
        eyes: 0,
        lostEye: false,
      },
      creature: 'Adder',
    }

    this.onUpdate()
  }

  private onUpdate() {
    switch (this.state.selected) {
      case 'custom': {
        this.props.onValueChange({ type: 'custom', data: this.state.custom })
        break
      }
      case 'deathcard': {
        this.props.onValueChange({ type: 'deathcard', data: this.state.deathcard })
        break
      }
      case 'creature': {
        this.props.onValueChange({ type: 'creature', creature: this.state.creature })
        break
      }
      case 'none': {
        this.props.onValueChange(undefined)
      }
    }
  }

  render() {

    const custom = <CustomPortraitSelect
      enabled={this.state.selected === 'custom'}
      onUpdate={customPortrait => this.setState({ custom: customPortrait }, this.onUpdate)}
    />

    const deathcard = <DeathcardPortraitSelect
      enabled={this.state.selected === 'deathcard'}
      onUpdate={deathcard => this.setState({ deathcard }, this.onUpdate)}
    />

    const creature = <CreaturePortraitSelect
      enabled={this.state.selected === 'creature'}
      onUpdate={creature => this.setState({ creature }, this.onUpdate)}
    />

    const foo = (select: State['selected'], element?: JSX.Element) => (
      <label className='portrait'>
        <input type="radio" name="portrait" checked={this.state.selected === select} onChange={() => this.setState({ selected: select }, this.onUpdate)} />
        {element ? (<fieldset>
          {element}
        </fieldset>) : (<h3>None</h3>)}
      </label>
    )

    return (
      <>
        {foo('none')}
        {foo('deathcard', deathcard)}
        {foo('creature', creature)}
        {foo('custom', custom)}
      </>
    )
  }
}
