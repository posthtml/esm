const posthtml = require('./helpers')
const { imports } = require('../lib')

describe('Import', () => {
  describe('Defaults', () => {
    test('src', () => {
      const plugins = [ imports() ]
      const options = {}

      return posthtml('import.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()
        })
    })
  })

  describe('Filter', () => {
    test('src', () => {
      const plugins = [
        imports({
          import: /filter/
        })
      ]
      const options = {}

      return posthtml('import.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()
        })
    })
  })
})
