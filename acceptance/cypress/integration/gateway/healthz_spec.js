const GATEWAY_URL = 'http://localhost:4000'

describe('/healthz', () => {
  const subject = () => cy.request({
    method: 'POST',
    url: '/graphql/healthz',
    body: {
      query: '{ healthz }',
    }
  })

  it('should return 200', () => {
    subject().its('status').should('eql', 200)
  })
})
