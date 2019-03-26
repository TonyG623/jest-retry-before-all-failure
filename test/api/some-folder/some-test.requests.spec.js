describe('My Describe', function () {
  beforeAll(async function () {
    thisVariableTotallyDoesntExist
    throw new Error('Fail in Setup if the above line didnt already fail...')
  })


  it('My Test', async function () {
    throw new Error('We shouldnt even get here')
  })
})
