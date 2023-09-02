import React from 'react';

type Props = {
  enabled: boolean,
  onUpdate: (creatureId: string) => void
}
export default class CreaturePortraitSelect extends React.Component<Props> {

  render() {
    return (
      <>
        <h3>Creature</h3>
        <select onChange={e => this.props.onUpdate(e.target.value)}>
          <optgroup label='Leshy'>
            <option value='Adder'>Adder</option>
            <option value='Alpha'>Alpha</option>
            <option value='Amalgam'>Amalgam</option>
            <option value='Amoeba'>Amoeba</option>
            <option value='Ant'>Worker Ant</option>
            <option value='AntFlying'>Flying Ant</option>
            <option value='AntQueen'>Ant Queen</option>
            <option value='AquaSquirrel'>AquaSquirrel</option>
            <option value='Bat'>Bat</option>
            <option value='Beaver'>Beaver</option>
            <option value='Bee'>Bee</option>
            <option value='Beehive'>Beehive</option>
            <option value='Bloodhound'>Bloodhound</option>
            <option value='Boulder'>Boulder</option>
            <option value='Bullfrog'>Bullfrog</option>
            <option value='CagedWolf'> Caged Wolf</option>
            <option value='Cat'>Cat</option>
            <option value='CatUndead'>Undead Cat</option>
            <option value='Cockroach'>Cockroach</option>
            <option value='Coyote'>Coyote</option>
            <option value='Cuckoo'>Cuckoo</option>
            <option value='Daus'>The Daus</option>
            <option value='DireWolf'>Dire Wolf</option>
            <option value='DireWolfCub'>Dire Wolf Pup</option>
            <option value='Elk'>Elk</option>
            <option value='ElkCub'>Elk Fawn</option>
            <option value='FieldMouse'>Field Mice</option>
            <option value='Geck'>Geck</option>
            <option value='Goat'>Black Goat</option>
            <option value='GoatSexy'>Sexy Black Goat</option>
            <option value='Grizzly'>Grizzly</option>
            <option value='Hodag'>Hodag</option>
            <option value='Hydra'>Hydra</option>
            <option value='HydraEgg'>Curious Egg</option>
            <option value='Ijiraq'>Ijiraq</option>
            <option value='JerseyDevil'>Child 13</option>
            <option value='JerseyDevilFlying'>Child 13 (Flying)</option>
            <option value='Kingfisher'>Kingfisher</option>
            <option value='Kraken'>Great Kraken</option>
            <option value='Lammergeier'>Lammergeier</option>
            <option value='Maggots'>Corpse Maggots</option>
            <option value='Magpie'>Magpie</option>
            <option value='Mantis'>Mantis</option>
            <option value='MantisGod'>Mantis God</option>
            <option value='MealWorm'>Mealworm</option>
            <option value='Mole'>Mole</option>
            <option value='MoleMan'>Mole Man</option>
            <option value='MoleSeaman'>Mole Seaman</option>
            <option value='Moose'>Moose Buck</option>
            <option value='Mothman_Stage1'>Mothman (Stage 1)</option>
            <option value='Mothman_Stage2'>Mothman (Stage 2)</option>
            <option value='Mothman_Stage3'>Mothman (Stage 3)</option>
            <option value='MudTurtle'>Mud Turtle</option>
            <option value='MudTurtleShelled'>Mud Turtle Shelled</option>
            <option value='Mule'>Pack Mule</option>
            <option value='Opossum'>Opossum</option>
            <option value='Otter'>River Otter</option>
            <option value='Ouroboros'>Ouroboros</option>
            <option value='PackRat'>Pack Rat</option>
            <option value='Porcupine'>Porcupine</option>
            <option value='Pronghorn'>Pronghorn</option>
            <option value='Rabbit'>Rabbit</option>
            <option value='RatKing'>Rat King</option>
            <option value='Rattler'>Rattler</option>
            <option value='Raven'>Raven</option>
            <option value='RavenEgg'>Raven Egg</option>
            <option value='Raccoon'>Raccoon</option>
            <option value='RedHart'>Red Hart</option>
            <option value='Shark'>Great White</option>
            <option value='SkeletonParrot'>Skeleton Parrot</option>
            <option value='SkeletonPirate'>Skeleton Pirate</option>
            <option value='Skink'>Skink</option>
            <option value='Skunk'>Skunk</option>
            <option value='Snapper'>River Snapper</option>
            <option value='Snelk'>Long Elk</option>
            <option value='Sparrow'>Sparrow</option>
            <option value='Stoat'>Stoat</option>
            <option value='SquidBell'>Bell Tentacle</option>
            <option value='SquidCards'>Hand Tentacle</option>
            <option value='SquidMirror'>Mirror Tentacle</option>
            <option value='Squirrel'>Squirrel</option>
            <option value='SkinkTail'>Tail (Skink)</option>
            <option value='Tail_Bird'>Tail (Bird)</option>
            <option value='Tail_Furry'>Tail (Canine)</option>
            <option value='Tail_Insect'>Tail (Insect)</option>
            <option value='Tadpole'>Tadpole</option>
            <option value='Urayuli'>Urayuli</option>
            <option value='Vulture'>Turkey Vulture</option>
            <option value='Warren'>Warren</option>
            <option value='Bull'>Wild Bull</option>
            <option value='Wolf'>Wolf</option>
            <option value='WolfCub'>Wolf Cub</option>
            <option value='Wolverine'>Wolverine</option>
            <option value='BaitBucket'>Bait Bucket</option>
            <option value='BrokenEgg'>Broken Egg</option>
            <option value='Dam'>Dam</option>
            <option value='DausBell'>Chime</option>
            <option value='GoldNugget'>Gold Nugget</option>
            <option value='PeltGolden'>Golden Pelt</option>
            <option value='PeltHare'>Rabbit Pelt</option>
            <option value='PeltLice'>Pelt Lice</option>
            <option value='PeltWolf'>Wolf Pelt</option>
            <option value='RingWorm'>Ring Worm</option>
            <option value='Smoke'>The Smoke</option>
            <option value='Smoke_Improved'>Greater Smoke</option>
            <option value='Starvation'>Starvation</option>
            <option value='Trap'>Leaping Trap</option>
            <option value='TrapFrog'>Strange Frog</option>
            <option value='FrozenOpossum'>Frozen Opossum</option>
            <option value='Tree_SnowCovered'>Snowy Fir</option>
            <option value='Tree'>Grand Fir</option>
            <option value='Stump'>Stump</option>
            <option value='Stinkbug_Talking'>Stinkbug (Talking)</option>
            <option value='Stoat_Talking'>Stoat (Talking)</option>
            <option value='Wolf_Talking'>Wolf (Talking)</option>
          </optgroup>
          <optgroup label='Grimora'>
            <option value='Skeleton'>Skeleton</option>
            <option value='Banshee'>Banshee</option>
            <option value='Bonehound'>Bonehound</option>
            <option value='FrankNStein'>Frank &amp; Stein</option>
            <option value='Gravedigger'>Gravedigger</option>
            <option value='Revenant'>Revenant</option>
          </optgroup>
          <optgroup label='P03'>
            <option value='AlarmBot'>Alarm Bot</option>
            <option value='Automaton'>Automaton</option>
            <option value='Angler_Fish_Bad'>Bad Fish</option>
            <option value='BatteryBot'>Energy Bot</option>
            <option value='XformerBatBeast'>S0N1A</option>
            <option value='XformerBatBot'>*XformerBatBot</option>
            <option value='XformerGrizzlyBeast'>GR1ZZ</option>
            <option value='XformerGrizzlyBot'>*XformerGrizzlyBot</option>
            <option value='BoltHound'>Bolthound</option>
            <option value='Bombbot'>Explode Bot</option>
            <option value='LatcherBomb'>Bomb Latcher</option>
            <option value='LatcherBrittle'>Skel-e-latcher</option>
            <option value='BustedPrinter'>Busted 3D Printer</option>
            <option value='CaptiveFile'>Captive File</option>
            <option value='CellBuff'>Tough Cell</option>
            <option value='CellGift'>Kind Cell</option>
            <option value='CellTri'>Splinter Cell</option>
            <option value='AttackConduit'>Buff Conduit</option>
            <option value='GemsConduit'>Gems Conduit</option>
            <option value='NullConduit'>*NullConduit</option>
            <option value='EmptyVessel'>Empty Vessel</option>
            <option value='GemExploder'>*GemExploder</option>
            <option value='GemRipper'>Gembound Ripper</option>
            <option value='GemShielder'>*GemShielder</option>
            <option value='GiftBot'>Gift Bot</option>
            <option value='Angler_Fish_Good'>Good Fish</option>
            <option value='CloserBot'>Double Gunner</option>
            <option value='Insectodrone'>Insectodrone</option>
            <option value='LeapBot'>L33pB0t</option>
            <option value='Librarian'>Librarian</option>
            <option value='MineCart'>49er</option>
            <option value='Angler_Fish_More'>More Fish</option>
            <option value='MYCOCARD_BASE'>*MYCOCARD_BASE</option>
            <option value='Ouroboros_Part3'>Ourobot</option>
            <option value='XformerPorcupineBeast'>QU177</option>
            <option value='XformerPorcupineBot'>*XformerPorcupineBot</option>
            <option value='RoboSkeleton'>ExeSkeleton</option>
            <option value='SentinelBlue'>Goranj's Vessel</option>
            <option value='SentinelGreen'>Orlu's Vessel</option>
            <option value='SentinelOrange'>Bleene's Vessel</option>
            <option value='SentryBot'>Sentry Drone</option>
            <option value='Shieldbot'>Shieldbot</option>
            <option value='LatcherShield'>Shield Latcher</option>
            <option value='Shutterbug'>Shutterbug</option>
            <option value='Sniper'>Sniper Bot</option>
            <option value='SwapBot'>Swapbot</option>
            {/* <option value='Swapbot_Swapped'>*Swapbot Swapped</option> */}
            <option value='CXformerAdder'>ADD3R</option>
            <option value='CXformerRaven'>RAV3N</option>
            <option value='CXformerWolf'>W07F</option>
          </optgroup>
        </select>
      </>
    )
  }
}
