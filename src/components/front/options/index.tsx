import React from 'react';
import Name from './name';
import Health from './health';
import Power from './power';
import CardType from './cardType';
import Tribe, { Tribe as TribeType } from './tribe';
import Cost from './cost';
import Sigil from './sigil';
import Section from '../../menuSection';
import Temple from './temple';
import Portrait, { PortraitData } from './portrait';
import Flags from './flags';

export type Card = {
  name: string,
  health: number, // 0 - 9999
  power: number, // 0 - 9999
  staticon: 'ants' | 'cardsinhand' | 'mirror' | 'bell' | 'greengems' | 'bones' | undefined,
  tribes: TribeType[], // Tribe[], max length 5
  bloodCost: number, // 0 - 4
  boneCost: number, // 0 - 13, 0 - 10
  energyCost: number, // 0 - 6
  gemCost?: { orange1: boolean, green1: boolean, blue1: boolean, orange2: boolean, green2: boolean, blue2: boolean, orange3: boolean, green3: boolean, blue3: boolean },
  sigils: string[], // Sigil[], max length 3
  decals: string[], // ('blood' | 'smoke' | 'paint')[]
  temple: string, // Temple
  terrain: boolean,
  terrainLayout: boolean,
  rare: boolean,
  golden: boolean,
  squid: boolean,
  fused: boolean,
  smoke: boolean,
  portrait?: PortraitData
}

export const templateCard: Card = {
  name: '',
  power: 0, // 0 - 9999
  staticon: undefined,
  health: 1,
  tribes: [],
  bloodCost: 0, // 0 - 4
  boneCost: 0, // 0 - 13, 0 - 10
  energyCost: 0, // 0 - 6
  gemCost: undefined,
  decals: [],
  sigils: [],
  temple: 'nature', // Temple
  terrain: false,
  terrainLayout: false,
  rare: false,
  golden: false,
  squid: false,
  fused: false,
  smoke: false,
  portrait: undefined
}

export default class CardGeneratorOptions extends React.Component<{ onCardUpdate: (card: Card) => void, errorCategory: string | undefined }, Card> {
  constructor(props: any) {
    super(props)
    this.state = templateCard
  }

  render() {
    const sections: { title: string | JSX.Element, element: JSX.Element, category?: string, help?: string }[] = [
      { title: 'Name', element: <Name onValueChange={name => this.setState({ name }, this.onUpdate)} /> },
      { title: 'Type', element: <CardType onValueChange={(rare, terrain, terrainLayout) => this.setState({ rare, terrain, terrainLayout }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Health', element: <Health onValueChange={health => this.setState({ health }, this.onUpdate)} /> },
      { title: 'Power', category: 'power staticon', element: <Power onValueChange={(power, staticon) => this.setState({ power, staticon }, this.onUpdate)} /> },
      { title: 'Cost', category: 'cost', element: <Cost onValueChange={(blood, bone, energy, gems) => this.setState({ bloodCost: blood, boneCost: bone, energyCost: energy, gemCost: gems }, this.onUpdate)} /> },
      { title: 'Abilities', category: 'sigil', element: <Sigil onValueChange={sigils => this.setState({ sigils }, this.onUpdate)} /> },
      { title: 'Portrait', category: 'portrait', element: <Portrait onValueChange={portrait => this.setState({ portrait }, this.onUpdate)} /> },
      { title: 'Tribes', element: <Tribe onValueChange={tribes => this.setState({ tribes }, this.onUpdate)} /> },
      { title: 'Temple', element: <Temple onValueChange={temple => this.setState({ temple }, this.onUpdate)} />, help: 'Card appearance might be affected in different card styles' },
      { title: 'Other', element: <Flags onValueChange={(fused, golden, squid, smoke) => this.setState({ fused, golden, squid, smoke }, this.onUpdate)} /> },
    ]

    return (
      <section id='options'>
        {sections.map((section, index) => (<Section category={section.category} key={index} title={section.title} help={section.help} error={!!(this.props.errorCategory && section.category?.includes(this.props.errorCategory))}>{section.element}</Section>))}
      </section>
    );
  }

  private onUpdate() {
    this.props.onCardUpdate(this.state)
  }
}
