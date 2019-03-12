describe('gateway.user', () => {
  describe('signUp', () => {
    const signUp = ({ email }) => cy.query({
      query: `
        mutation signup($email: String!) {
          signup(email: $email) {
            id
            email
          }
        }
      `,
      variables: {
        email
      }
    })

    context('new user', () => {
      it('successfully creates the user', () => {
        signUp({ email: 'new-user@example.com' })
          .then(response => {
            const { errors, data: { signup: newUser } } = response.body

            expect(errors).to.be.empty
            expect(newUser.id).to.be.a('string')
            expect(newUser.email).to.equal('new-user@example.com')
          })
      })
    })

    context('existing user', () => {
      it('raises exception', () => {
        signUp({ email: 'existing-user@example.com' })
          .then(response => {
            expect(response.body.errors).to.not.be.undefined
            const error = response.body.errors[0]
            expect(error.extensions.code).to.equal('USER_ALREADY_EXISTS')
          })
      })
    })
  })
})
