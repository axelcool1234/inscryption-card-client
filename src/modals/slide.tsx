
import React from 'react';

export { SlideModal };

type Props = {
  options: string[][]
}
type State = {
  selectedIndex: number
}

class SlideModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    let counter = 0
    return (
      <>
        <style>
          {`.generator>article { transform: translate(${-this.state.selectedIndex * 100}%); }`}
        </style>
        <nav className='foo'>
          {this.props.options.map((options) => (
            <div className="nav-bg">
              {options.map((option) => {
                const index = counter
                counter++

                return <button className={(this.state.selectedIndex === index ? 'selected' : '')} key={index} onClick={() => this.setState({ selectedIndex: index })}>{option}</button>
              })}
            </div>
          ))}
        </nav>
        <main className='generator'>
          {this.props.children}
        </main>
      </>
    )
  }
}
