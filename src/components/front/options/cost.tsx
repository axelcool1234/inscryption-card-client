import React from 'react';
import CheckboxGroup from '../../checkboxGroup';

type CostData = {
  bloodCost: number, // 0 - 4
  boneCost: number, // 0 - 13, 0 - 10
  energyCost: number, // 0 - 6
  gemCost?: { orange1: boolean, green1: boolean, blue1: boolean, orange2: boolean, green2: boolean, blue2: boolean, orange3: boolean, green3: boolean, blue3: boolean  },
}
type Props = {
  onValueChange: (bloodCost: number, boneCost: number, energyCost: number, gemCost?: { orange1: boolean, green1: boolean, blue1: boolean, orange2: boolean, green2: boolean, blue2: boolean, orange3: boolean, green3: boolean, blue3: boolean }) => void
}
type State = {
  selected?: 'blood' | 'bone' | 'energy' | 'gem',
  blood: number,
  bone: number,
  energy: number,
  gems: ('orange1' | 'green1' | 'blue1' | 'orange2' | 'green2' | 'blue2' | 'orange3' | 'green3' | 'blue3')[],
}

export default class CostSelect extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = { selected: undefined, blood: 1, bone: 1, energy: 1, gems: [] }
  }

  private onUpdate() {
    const gems: CostData['gemCost'] = {
      orange1: this.state.gems.includes('orange1'),
      green1: this.state.gems.includes('green1'),
      blue1: this.state.gems.includes('blue1'),
      orange2: this.state.gems.includes('orange2'),
      green2: this.state.gems.includes('green2'),
      blue2: this.state.gems.includes('blue2'),
      orange3: this.state.gems.includes('orange3'),
      green3: this.state.gems.includes('green3'),
      blue3: this.state.gems.includes('blue3'),
    }

    const selected = this.state.selected

    this.props.onValueChange(
      selected === 'blood' ? this.state.blood : 0,
      selected === 'bone' ? this.state.bone : 0,
      selected === 'energy' ? this.state.energy : 0,
      selected === 'gem' ? gems : undefined,
    )
  }

  render() {
    return (
      <>
        <label>
          <input type='radio' name='cost' defaultChecked={true} onClick={() => this.setState({ selected: undefined }, () => this.onUpdate())} />
          <span>None</span>
        </label>
        <label>
          <input type='radio' name='cost' onClick={() => this.setState({ selected: 'blood' }, () => this.onUpdate())} />
          <span>Blood</span>
          <input type="number" min={1} max={10} defaultValue={1} disabled={this.state.selected !== 'blood'} onChange={e => this.setState({ blood: Number(e.target.value) }, () => this.onUpdate())} />
        </label>
        <label>
          <input type='radio' name='cost' onClick={() => this.setState({ selected: 'bone' }, () => this.onUpdate())} />
          <span>Bone</span>
          <input type="number" min={1} max={10} defaultValue={1} disabled={this.state.selected !== 'bone'} onChange={e => this.setState({ bone: Number(e.target.value) }, () => this.onUpdate())} />
        </label>
        <label>
          <input type='radio' name='cost' onClick={() => this.setState({ selected: 'energy' }, () => this.onUpdate())} />
          <span>Energy</span>
          <input type="number" min={1} max={6} defaultValue={1} disabled={this.state.selected !== 'energy'} onChange={e => this.setState({ energy: Number(e.target.value) }, () => this.onUpdate())} />
        </label>
        <label>
          <input type='radio' name='cost' onClick={() => this.setState({ selected: 'gem' }, () => this.onUpdate())} />
          <span>Gems</span>
          <CheckboxGroup enabled={this.state.selected === 'gem'} onUpdate={opts => this.setState({ gems: opts.filter(opt => opt.checked).map(opt => opt.value) }, () => this.onUpdate())} options={[
            { label: 'Orange', value: 'orange1' },
            { label: 'Green', value: 'green1' },
            { label: 'Blue', value: 'blue1' },
            { label: 'Orange', value: 'orange2' },
            { label: 'Green', value: 'green2' },
            { label: 'Blue', value: 'blue2' },
            { label: 'Orange', value: 'orange3' },
            { label: 'Green', value: 'green3' },
            { label: 'Blue', value: 'blue3' },
          ]} />
        </label>
      </>
    )
  }
}
