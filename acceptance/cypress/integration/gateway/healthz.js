describe('/healthz', () => {
  const subject = () => cy.query({
    query: '{ healthz }'
  })

  it('should return 200', () => {
    subject().its('status').should('eql', 200)
  })
})
