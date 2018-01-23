const posthtml = require('./helpers')
const { urls } = require('../lib')

describe('URLs', () => {
  describe('Defaults', () => {
    test('src', () => {
      const plugins = [ urls() ]
      const options = {}

      return posthtml('url/src.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })

    test('href', () => {
      const plugins = [ urls() ]
      const options = {}

      return posthtml('url/href.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })

    test('srcset', () => {
      const plugins = [ urls() ]
      const options = {}

      return posthtml('url/srcset.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })
  })

  describe('Filter', () => {
    test('src', () => {
      const plugins = [
        urls({
          url: /filter/
        })
      ]
      const options = {}

      return posthtml('url/src.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })

    test('href', () => {
      const plugins = [
        urls({
          url: /filter/
        })
      ]
      const options = {}

      return posthtml('url/href.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })

    test('srcset', () => {
      const plugins = [
        urls({
          filter: /filter/
        })
      ]
      const options = {}

      return posthtml('url/srcset.html', plugins, options)
        .then(({ html, messages }) => {
          expect(html).toMatchSnapshot()
          expect(messages).toMatchSnapshot()

          return null
        })
    })
  })
})
