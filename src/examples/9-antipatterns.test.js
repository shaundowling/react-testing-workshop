import React from 'react'
import { shallow } from 'enzyme'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick}>increment</button>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <span className="count">{this.state.count}</span>
        <Button onClick={this.updateCount} />
      </div>
    )
  }
}

it('bad: updates the counter when the button is clicked', () => {
  const wrapper = shallow(<Counter />)
  expect(wrapper.find('.count').text()).toBe("0")

  wrapper.find('Button').props().onClick()

  expect(wrapper.find('.count').text()).toBe("1")
})

it('good: updates the counter when the button is clicked', () => {
  const wrapper = shallow(<Counter />)
  expect(wrapper.find('.count').text()).toBe("0")

  wrapper.find('Button').simulate('click')

  expect(wrapper.find('.count').text()).toBe("1")
})



const Tree = ({value}) => (
  <span>
    a
    <span>
      b
      <span>
        c
        <span>
          d
          <span>
            e
            <span className="valueNode">
              {value}
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
)

it('bad: displays the value in the valueNode', () => {
  const wrapper = shallow(<Tree value="f" />)
  expect(wrapper.text()).toBe("abcdef")
})

it('better: displays the value in the valueNode', () => {
  const wrapper = shallow(<Tree value="f" />)
  expect(wrapper.find('.valueNode').text()).toBe("f")
})

