import React from 'react'
import { shallow } from 'enzyme'

const Smokeless = () => (
  <div />
)

const Nothing = () => (
  null
)

describe('Smoke tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Smokeless />)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders', () => {
    expect(() => {
      shallow(<Nothing />)
    }).not.toThrow()
  })
})
