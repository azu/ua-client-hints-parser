# ua-client-hints-parser

User-Agent Client Hints library based on User-Agent.

- https://github.com/WICG/ua-client-hints

## Motivation

Existing UA parser library is large.

- https://bundlephobia.com/result?p=ua-parser-js@0.7.22
- https://bundlephobia.com/result?p=user-agents@1.0.559
- https://bundlephobia.com/result?p=bowser@2.11.0
- https://bundlephobia.com/result?p=user-agent-parse@0.1.12

Almost user does not need old browser detection in the browser.
So, We need to get simple API like https://github.com/WICG/ua-client-hints.

This project try it.

- LightWeight
- Own UA dictionary
- Simple
- Async API like ua-client-hints
    - User can switch to ua-client-hints API

### Solution

- The library user inject own detection dictionary
    - Use peerDependencies
- This library/tool generate detection dictionary for needs
    - This idea is inspired by [browserslist-user-agent-regexp](https://github.com/doc22940/browserslist-user-agent-regexp)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install ua-client-hints-parser

## Usage

- [ ] Write usage instructions

## Changelog

See [Releases page](https://github.com/azu/ua-client-hints-parser/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/ua-client-hints-parser/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
