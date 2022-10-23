// The ZAFClient is imported within the index.html file.
// See docs for help regarding the ZAFClient: https://developer.zendesk.com/apps/docs/developer-guide/getting_started

let client

let ZAFClient
if (typeof ZAFClient === 'undefined') { // eslint-disable-line no-undef
  throw new Error("ZAFClient cannot run outside Zendesk")
} else {
  client = ZAFClient.init()
}

export default client
