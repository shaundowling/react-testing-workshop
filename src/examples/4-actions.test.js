import React from 'react'
import { shallow } from 'enzyme'

const GiftButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
      Gift slice
    </button>
  )
}

const MessageInput = ({onUpdate}) => {
  return (
    <input type="text" onChange={(e) => { onUpdate(e.target.value) }} />
  )
}


describe('Testing actions', () => {
  it('GiftButton invokes the callback when the button is clicked', () => {
    const mock = jest.fn()
    const wrapper = shallow(<GiftButton onClick={mock} />)

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })

  it('MessageInput invokes the update callback with the value when change event is fired', () => {
    const mock = jest.fn()
    const wrapper = shallow(<MessageInput onUpdate={mock} />)

    wrapper.find('input').simulate('change', {target: {value: "Hello"}})

    expect(mock).toHaveBeenCalledWith("Hello")
  })
})
