
it('doesnt leak between tests', () => {
  const review = localStorage.getItem('review')
  expect(review).toBe(null)
})
