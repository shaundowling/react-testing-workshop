import React from 'react'
import { shallow } from 'enzyme'

class Review extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      review: ""
    }
  }

  componentDidMount() {
    document.title = "Review"

    const review = localStorage.getItem('review')

    this.setState({
      review
    })
  }

  render() {
    return (
      <div>{this.state.review}</div>
    )
  }
}

describe('Testing global dependencies (browser apis)', () => {
  /* Gnarly setup
  * this is simpler with older versions of JSDOM (reports-dashboard) but this kind
  * of setup is probably required in new internal tools
  *
  * reports-dashboard example
  *
  * global.localStorage = {}
  * global.localStorage.setItem = jest.fn()
  *
  * not possible with new JSDOM as localStorage implementation is not 'writable'
  */

  beforeAll(() => {
    Object.defineProperty(global, "localStorage", {
      writable: true,
      value: {
        getItem: jest.fn(() => "this is garbage")
      }
    })
  })

  beforeEach(() => {
    localStorage.getItem.mockClear()
  })

  it('sets the document title', () => {
    const wrapper = shallow(<Review />)

    expect(global.document.title).toEqual('Review')
  })

  it('calls localStorage.getItem', () => {
    const wrapper = shallow(<Review />)
    const spy = jest.spyOn(localStorage, 'getItem')
    expect(spy.mock.calls.length).toEqual(1)

    // for my sanity
    shallow(<Review />)
    expect(spy.mock.calls.length).toEqual(2)
  })

  it('renders the review from localStorage', () => {
    const wrapper = shallow(<Review />)
    expect(wrapper.text()).toEqual('this is garbage')
  })

})
