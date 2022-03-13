import React from 'react';

type CostData = {
  bloodCost: number, // 0 - 4
  boneCost: number, // 0 - 13, 0 - 10
  energyCost: number, // 0 - 6
  gemCost: { orange: boolean, green: boolean, blue: boolean },
}
type Props = {
  onValueChange: (bloodCost: number, boneCost: number, energyCost: number, gemCost: { orange: boolean, green: boolean, blue: boolean }) => void
}
type State = {
  selected?: 'blood' | 'bone' | 'energy' | 'gem',
  blood: number,
  bone: number,
  energy: number,
  gems: ('orange' | 'green' | 'blue')[],
}

export default class CostSelect extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = { selected: undefined, blood: 1, bone: 1, energy: 0, gems: [] }
  }

  private onUpdate() {
    const gems: CostData['gemCost'] = {
      orange: this.state.gems.includes('orange'),
      green: this.state.gems.includes('green'),
      blue: this.state.gems.includes('blue'),
    }

    const selected = this.state.selected

    this.props.onValueChange(
      selected === 'blood' ? this.state.blood : 0,
      selected === 'bone' ? this.state.bone : 0,
      selected === 'energy' ? this.state.energy : 0,
      selected === 'gem' ? gems : { orange: false, green: false, blue: false },
    )
  }

  render() {
    return (
      <>
        <p>
          <label>
            <input type='radio' name='cost' defaultChecked={true} onClick={() => this.setState({ selected: undefined }, () => this.onUpdate())} />
            None
          </label>
        </p>
        <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'blood' }, () => this.onUpdate())} />
            Blood
            <input type="number" min={1} max={4} defaultValue={1} disabled={this.state.selected !== 'blood'} onChange={e => this.setState({ blood: Number(e.target.value) }, () => this.onUpdate())} />
          </label>
        </p>
        <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'bone' }, () => this.onUpdate())} />
            Bone
            <input type="number" min={1} max={10} defaultValue={1} disabled={this.state.selected !== 'bone'} onChange={e => this.setState({ bone: Number(e.target.value) }, () => this.onUpdate())} />
          </label>
        </p>
        {/* <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'gem' }, () => this.onUpdate())} />
            Gems
            <CheckboxGroup onUpdate={opts => this.setState({ gems: opts.filter(opt => opt.checked).map(opt => opt.value) }, () => this.onUpdate())} options={[
              { label: 'Orange', value: 'orange' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ]} />
          </label>
        </p> */}
      </>
    )
  }
}
