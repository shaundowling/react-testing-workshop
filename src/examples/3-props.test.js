import React from 'react'
import { shallow } from 'enzyme'

const Rating = ({count}) => {
  let validCount = count

  if(count > 6) {
    validCount = 6
  }

  if(count < 1) {
    validCount = 1
  }

  return (
    <span>
      {[...Array(validCount).keys()].map((n, idx) => (
        <span key={idx} className="slice">
          🍕
        </span>
      ))}
    </span>
  )
}


describe('Rating prop tests', () => {
  it('displays rating based on count prop', () => {
    const wrapper = shallow(<Rating count={3} />)

    expect(wrapper.text()).toBe("🍕🍕🍕")
    expect(wrapper.find('.slice').length).toBe(3)
  })

  it('cant have negative slices', () => {
    const wrapper = shallow(<Rating count={-1} />)

    expect(wrapper.find('.slice').length).toBe(1)
  })

  it('cant be more than a full pizza', () => {
    const wrapper = shallow(<Rating count={20} />)

    expect(wrapper.find('.slice').length).toBe(6)
  })
})
