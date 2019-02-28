import React from 'react'
import { shallow } from 'enzyme'
import { LikeButton } from './Components'

// we need to import the dependency to spy on it
import tracking from './tracking'

describe('Testing dependencies (imports)', () => {
  it('LikeButton: sends a analytics tracking event when clicked', () => {
    jest.spyOn(tracking, 'sendEvent')
    const wrapper = shallow(<LikeButton />)

    wrapper.find('button').simulate('click')

    expect(tracking.sendEvent).toHaveBeenCalledWith('Like button clicked')
  })
})
