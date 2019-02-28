import React from 'react'
import { shallow } from 'enzyme'

const Rating = () => (
  <span>
    🍕🍕🍕
  </span>
)

const App = () => (
  <div>
    <Rating />
  </div>
)

describe('Existence and value tests', () => {
  it('app displays a rating', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Rating').exists()).toBe(true)
  })

  it('rating is displayed as pizza slices', () => {
    const wrapper = shallow(<Rating />)
    expect(wrapper.text()).toEqual("🍕🍕🍕")
  })

  it('alt rating is displayed as pizza slices', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Rating').dive().text()).toEqual("🍕🍕🍕")
  })
})
