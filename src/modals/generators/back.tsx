import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta';
import CardImage from '../../components/back/cardImage'
import Section from '../../components/menuSection'
import SelectOptions from '../../components/selectOptions'

type State = {
  errorCategory?: string,
  meta: Omit<Meta, 'locale'>,
  leshy: 'common' | 'submerged' | 'death' | 'squirrel' | 'bee'
  gbc: 'common' | 'submerged'
  pixelProfilgate: 'common'
}
export default class CardGenerator extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      leshy: 'common',
      gbc: 'common',
      pixelProfilgate: 'common',
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
      }
    }
  }

  render() {

    const section = () => {
      switch (this.state.meta.act) {
        case 'leshy': {
          return <Section title='Kind (Leshy)'>
            <SelectOptions
              uniqueName='kind-lehy'
              onChange={kind => this.setState({ leshy: kind })}
              value={this.state.leshy}
              options={[
                { value: 'common', label: 'Default' },
                { value: 'submerged', label: 'Submerged' },
                { value: 'death', label: 'Death' },
                { value: 'squirrel', label: 'Squirrel' },
                { value: 'bee', label: 'Bee' },
              ]}
            />
          </Section>
        }
        case 'gbc': {
          return <Section title='Kind (GBC)'>
            <SelectOptions
              uniqueName='kind-gbc'
              onChange={kind => this.setState({ gbc: kind })}
              value={this.state.gbc}
              options={[
                { value: 'common', label: 'Default' },
                { value: 'submerged', label: 'Submerged' },
              ]}
            />
          </Section>
        }
        case 'pixelprofilgate': {
          return <Section title='Kind (Pixel Profilgate)'>
            <SelectOptions
              uniqueName='kind-ppg'
              onChange={kind => this.setState({ pixelProfilgate: kind })}
              value={this.state.pixelProfilgate}
              options={[
                { value: 'common', label: 'Default' },
              ]}
            />
          </Section>
        }
      }
    }

    return (
      <article>
        <section className='card-display'>
          <CardImage meta={this.state.meta} setErrorCategory={() => { }} />
        </section>
        <section className='card-options'>
          <section>
            {section()}
          </section>
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} useLocale={false} />
        </section>
      </article>
    );
  }
}
