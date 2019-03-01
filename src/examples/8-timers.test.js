import React, {useState, useEffect} from 'react'
import { shallow } from 'enzyme'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

jest.useFakeTimers()

describe('testing timers setInterval', () => {
  it('updates the counter every tick', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.text()).toBe("0")

    jest.runOnlyPendingTimers()
    expect(wrapper.text()).toBe("1")

    jest.runOnlyPendingTimers()
    expect(wrapper.text()).toBe("2")
  })

  it('updates the counter every second', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.text()).toBe("0")

    jest.advanceTimersByTime(1000);
    expect(wrapper.text()).toBe("1")

    jest.advanceTimersByTime(1000);
    expect(wrapper.text()).toBe("2")
  })
})

class DelayMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({message: "Cya"})
    }, 30000)
  }

  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}

describe('testing timers setTimeout', () => {
  it('changes the message when the setTimeout fires', () => {
    const wrapper = shallow(<DelayMessage />)
    expect(wrapper.text()).toBe("Hello")

    jest.runOnlyPendingTimers();

    expect(wrapper.text()).toBe("Cya")
  })

  it('changes the message after 30 seconds', () => {
    const wrapper = shallow(<DelayMessage />)
    expect(wrapper.text()).toBe("Hello")

    jest.advanceTimersByTime(30000);

    expect(wrapper.text()).toBe("Cya")
  })
})
