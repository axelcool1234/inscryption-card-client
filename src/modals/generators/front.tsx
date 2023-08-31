import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta';
import CardGeneratorOptions, { Card, templateCard } from '../../components/front/options';
import { DownloadImagePanel } from '../../components/imagePanel';
import { blobTo64, triggerDownload } from '../../helpers';

export default class CardGenerator extends React.Component<{}, { errorCategory?: string, card: Card, meta: Meta, data: string | undefined }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      card: templateCard,
      data: undefined,
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
        locale: 'default',
      }
    }
  }

  render() {
    return (
      <article>
        <DownloadImagePanel
          fetchImage={async () => {
            const { card, meta } = this.state

            const parameters = [
              meta.border ? 'border' : undefined,
              meta.scanline ? 'scanline' : undefined,
              meta.locale ? `locale=${meta.locale}` : undefined,
            ].filter(x => x)

            const endpoint = process.env.REACT_APP_API_ENDPOINT
            const opts = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(card),
            }

            const url = `${endpoint}/api/card/${meta.act}/front${parameters.length ? ('?' + parameters.join('&')) : ''}`
            console.log(url)
            console.log(opts.body)

            const response = await fetch(url, opts)
            if (!response.ok) {
              const errorResponse = await response.json()
              const category = errorResponse?.category
              if (typeof category === 'string') {
                this.setState({ errorCategory: category }, () => {
                  const element = document.querySelector(`.menu.error.${category}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                })
              }
              return
            }

            const blob = await response.blob()
            const data = await blobTo64(blob)

            this.setState({ data })

            return data
          }}
          buttons={[
            {
              label: 'In-game export',
              onClick: async () => {
                const { card } = this.state

                const endpoint = process.env.REACT_APP_API_ENDPOINT
                const opts = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(card),
                }

                const url = `${endpoint}/api/jldr`

                const response = await fetch(url, opts)
                if (!response.ok) {
                  const errorResponse = await response.json()
                  const category = errorResponse?.category
                  if (typeof category === 'string') {
                    this.setState({ errorCategory: category }, () => {
                      const element = document.querySelector(`.menu.error.${category}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    })
                  }
                  return
                }

                const blob = await response.blob()
                const data = await blobTo64(blob)

                const creatureName = `${card.name ? card.name.replaceAll(/\W/g, '-') : 'creature'}`
                triggerDownload(data, creatureName + '.jldr2.zip')
              }
            }
          ]}
        />
        <section className='card-options'>
          <CardGeneratorOptions onCardUpdate={card => this.setState({ card })} errorCategory={this.state.errorCategory} />
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} />
        </section>
      </article>
    );
  }
}
