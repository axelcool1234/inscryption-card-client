import React from 'react';

export default class SigilSelect extends React.Component<{ onValueChange: (sigils: string[]) => void }, { sigils: [string?, string?, string?] }> {
  constructor(props: any) {
    super(props)
    this.state = { sigils: [undefined, undefined, undefined] }
  }

  render() {
    const sigils: { id: string | undefined, name: string, disabled?: boolean }[] = [
      { id: '', name: '-' },

      { id: 'madeofstone', name: 'Made of Stone' },

      { id: 'drawrabbits', name: 'Rabbit Hole' },
      { id: 'beesonhit', name: 'Bees Within' },
      { id: 'strafe', name: 'Sprinter' },
      { id: 'deathtouch', name: 'Touch of Death' },
      { id: 'evolve', name: 'Fledgling' },
      { id: 'evolve_1', name: 'Fledgling (1)' },
      { id: 'evolve_2', name: 'Fledgling (2)' },
      { id: 'evolve_3', name: 'Fledgling (3)' },
      { id: 'createdams', name: 'Dam Builder' },
      { id: 'tutor', name: 'Hoarder' },
      { id: 'whackamole', name: 'Burrower' },
      { id: 'drawcopy', name: 'Fecundity' },
      { id: 'tailonhit', name: 'Loose Tail' },
      { id: 'corpseeater', name: 'Corpse Eater' },
      { id: 'quadruplebones', name: 'Bone King' },
      { id: 'submerge', name: 'Waterborne' },
      { id: 'drawcopyondeath', name: 'Unkillable' },
      { id: 'sharp', name: 'Sharp Quills' },
      { id: 'strafepush', name: 'Hefty' },
      { id: 'drawant', name: 'Ant Spawner' },
      { id: 'guarddog', name: 'Guardian' },
      { id: 'flying', name: 'Airborne' },
      { id: 'sacrificial', name: 'Many Lives' },
      { id: 'preventattack', name: 'Repulsive' },
      { id: 'tripleblood', name: 'Worthy Sacrifice' },
      { id: 'reach', name: 'Mighty Leap' },
      { id: 'splitstrike', name: 'Bifurcated Strike' },
      { id: 'tristrike', name: 'Trifurcated Strike' },
      { id: 'icecube', name: 'Frozen Away' },
      { id: 'sinkhole', name: 'Sinkhole' },
      { id: 'bonedigger', name: 'Bone Digger' },
      { id: 'randomconsumable', name: 'Trinket Bearer' },
      { id: 'steeltrap', name: 'Steel Trap' },
      { id: 'randomability', name: 'Amorphous' },
      { id: 'squirrelorbit', name: 'Tidal Lock' },
      { id: 'allstrike', name: 'Moon Strike' },
      { id: 'buffneighbours', name: 'Leader' },
      { id: 'brittle', name: 'Brittle' },
      { id: 'skeletonstrafe', name: 'Skeleton Crew' },
      { id: 'gaingemgreen', name: 'Green Mox' },
      { id: 'gaingemorange', name: 'Orange Mox' },
      { id: 'gaingemblue', name: 'Blue Mox' },
      { id: 'buffgems', name: 'Gem Animator' },
      { id: 'droprubyondeath', name: 'Ruby Heart' },
      { id: 'gemsdraw', name: 'Mental Gemnastics' },
      { id: 'gemdependant', name: 'Gem Dependant' },
      { id: 'gaingemtriple', name: 'Great Mox' },
      { id: 'drawnewhand', name: 'Handy' },
      { id: 'squirrelstrafe', name: 'Squirrel Shedder' },
      { id: 'conduitbuffattack', name: 'Attack Conduit' },
      { id: 'conduitfactory', name: 'Spawn Conduit' },
      { id: 'conduitheal', name: 'Healing Conduit' },
      { id: 'conduitnull', name: 'Null Conduit' },
      { id: 'gainbattery', name: 'Battery Bearer' },
      { id: 'explodeondeath', name: 'Detonator' },
      { id: 'sniper', name: 'Sniper' },
      { id: 'deathshield', name: 'Nano Armor' },
      { id: 'permadeath', name: 'Overclocked' },
      { id: 'latchexplodeondeath', name: 'Bomb Latch' },
      { id: 'latchbrittle', name: 'Brittle Latch' },
      { id: 'latchdeathshield', name: 'Shield Latch' },
      { id: 'filesizedamage', name: 'Dead Byte' },
      { id: 'deletefile', name: 'Hostage File' },
      { id: 'transformer', name: 'Transformer' },
      { id: 'sentry', name: 'Sentry' },
      { id: 'explodegems', name: 'Gem Detonator' },
      { id: 'shieldgems', name: 'Gem Guardian' },
      { id: 'drawvesselonhit', name: 'Vessel Printer' },
      { id: 'conduitenergy', name: 'Energy Conduit' },
      { id: 'bombspawner', name: 'Bomb Spewer' },
      { id: 'doubledeath', name: 'Double Death' },
      { id: 'activatedrandompowerenergy', name: 'Power Dice' },
      { id: 'activatedstatsup', name: 'Enlarge' },
      { id: 'swapstats', name: 'Swapper' },
      { id: 'activateddrawskeleton', name: 'Disentomb' },
      { id: 'activateddealdamage', name: 'Energy Gun' },
      { id: 'createbells', name: 'Bellist' },
      { id: 'buffenemy', name: 'Annoying' },
      { id: 'conduitspawngems', name: 'Gem Spawn Conduit' },
      { id: 'drawrandomcardondeath', name: 'Gift Bearer' },
      { id: 'loot', name: 'Looter' },
      { id: 'activatedsacrificedrawcards', name: 'True Scholar' },
      { id: 'activatedstatsupenergy', name: 'Stimulate' },
      { id: 'activatedheal', name: 'Marrow Sucker', disabled: true },
      { id: 'debuffenemy', name: 'Stinky' },
      { id: 'cellbuffself', name: 'Buff When Powered' },
      { id: 'celldrawrandomcardondeath', name: 'Gift When Powered' },
      { id: 'celltristrike', name: 'Trifurcated When Powered' },
      { id: 'activatedenergytobones', name: 'Bonehorn' },
      { id: 'movebeside', name: 'Clinger' },
      { id: 'submergesquid', name: 'Waterborne' },
      { id: 'bloodguzzler', name: 'Blood Guzzler', disabled: true },
      { id: 'haunter', name: 'Haunter', disabled: true },
      { id: 'explodingcorpse', name: 'Exploding Corpse', disabled: true },
      { id: 'bloodymary', name: 'Apparition', disabled: true },
      { id: 'virtualreality', name: 'Virtual Realist', disabled: true },
      { id: 'edaxiohead', name: 'Head of Edaxio', disabled: true },
      { id: 'edaxioarms', name: 'Arms of Edaxio', disabled: true },
      { id: 'edaxiolegs', name: 'Legs of Edaxio', disabled: true },
      { id: 'edaxiotorso', name: 'Torso of Edaxio', disabled: true },
    ]

    const onSigilChange = (n: number, sigil: string | undefined) => {
      const sigils = this.state.sigils;
      sigils[n] = sigil
      this.setState({ sigils }, () => {
        const sigils = this.state.sigils.filter(x => x).map(x => x!)
        this.props.onValueChange(sigils)
      })
    }

    const sigilSelect = (n: number) => (
      <select onChange={(e) => onSigilChange(n, e.target.value)}>
        {sigils.map(sigil => (<option key={`${n}-${sigil.id}`} value={sigil.id} disabled={sigil.disabled ?? false}>{sigil.name}</option>))}
      </select>
    )

    return (
      <ol>
        <li>{sigilSelect(1)}</li>
        <li>{sigilSelect(2)}</li>
        <li>{sigilSelect(3)}</li>
        <li>{sigilSelect(4)}</li>
      </ol>
    )
  }
}
