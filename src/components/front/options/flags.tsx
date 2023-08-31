import React from 'react';
import CheckboxGroup from '../../checkboxGroup';

type Props = { onValueChange: (fused: boolean, golden: boolean, squid: boolean, smoke: boolean, 
  blood1: boolean, blood2: boolean, blood3: boolean, blood4: boolean,
  paint1: boolean, paint2: boolean, paint3: boolean,
  snelk1: boolean, snelk2: boolean, snelk3: boolean, snelk4: boolean, snelk5: boolean, snelk6: boolean,
  stitches: boolean, fungus: boolean) => void }
type State = {
  fused: boolean,
  golden: boolean,
  squid: boolean,
  smoke: boolean,
  blood1: boolean,
  blood2: boolean,
  blood3: boolean,
  blood4: boolean,
  paint1: boolean,
  paint2: boolean,
  paint3: boolean,
  snelk1: boolean,
  snelk2: boolean,
  snelk3: boolean,
  snelk4: boolean,
  snelk5: boolean,
  snelk6: boolean,
  stitches: boolean,
  fungus: boolean,
}
export default class Flags extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      fused: false,
      golden: false,
      squid: false,
      smoke: false,
      blood1: false,
      blood2: false,
      blood3: false,
      blood4: false,
      paint1: false,
      paint2: false,
      paint3: false,
      snelk1: false,
      snelk2: false,
      snelk3: false,
      snelk4: false,
      snelk5: false,
      snelk6: false,
      stitches: false,
      fungus: false,
    }
  }

  private onUpdate() {
    this.props.onValueChange(this.state.fused, this.state.golden, this.state.squid, this.state.smoke, 
      this.state.blood1, this.state.blood2, this.state.blood3, this.state.blood4,
      this.state.paint1, this.state.paint2, this.state.paint3,
      this.state.snelk1, this.state.snelk2, this.state.snelk3, this.state.snelk4, this.state.snelk5, this.state.snelk6,
      this.state.stitches, this.state.fungus)
  }

  render() {
    return (<CheckboxGroup
      options={[
        { value: 'fused', label: 'Fused' },
        { value: 'golden', label: 'Golden' },
        { value: 'squid', label: 'Squid' },
        { value: 'smoke', label: 'Smoke' },
        { value: 'blood1', label: 'Blood 1' },
        { value: 'blood2', label: 'Blood 2' },
        { value: 'blood3', label: 'Blood 3' },
        { value: 'blood4', label: 'Blood 4' },
        { value: 'paint1', label: 'Paint 1' },
        { value: 'paint2', label: 'Paint 2' },
        { value: 'paint3', label: 'Paint 3' },
        { value: 'snelk1', label: 'Vertabrae 1' },
        { value: 'snelk2', label: 'Vertabrae 2' },
        { value: 'snelk3', label: 'Vertabrae 3' },
        { value: 'snelk4', label: 'Vertabrae 4' },
        { value: 'snelk5', label: 'Vertabrae 5' },
        { value: 'snelk6', label: 'Vertabrae 6' },
        { value: 'stitches', label: 'Stitches' },
        { value: 'fungus', label: 'Fungus' },
      ]}
      onUpdate={opts => {
        const selected = opts.filter(opt => opt.checked).map(opt => opt.value)
        this.setState({
          fused: selected.includes('fused'),
          golden: selected.includes('golden'),
          squid: selected.includes('squid'),
          smoke: selected.includes('smoke'),
          blood1: selected.includes('blood1'),
          blood2: selected.includes('blood2'),
          blood3: selected.includes('blood3'),
          blood4: selected.includes('blood4'),
          paint1: selected.includes('paint1'),
          paint2: selected.includes('paint2'),
          paint3: selected.includes('paint3'),
          snelk1: selected.includes('snelk1'),
          snelk2: selected.includes('snelk2'),
          snelk3: selected.includes('snelk3'),
          snelk4: selected.includes('snelk4'),
          snelk5: selected.includes('snelk5'),
          snelk6: selected.includes('snelk6'),
          stitches: selected.includes('stitches'),
          fungus: selected.includes('fungus'),
        }, this.onUpdate)
      }}
    />)
  }
}
