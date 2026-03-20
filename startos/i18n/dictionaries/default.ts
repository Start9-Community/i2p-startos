export const DEFAULT_LANG = 'en_US'

const dict = {
  'Tor is running': 0,
  'Tor is not ready': 1,
  'Private Key (optional)': 2,
  'Base64-encoded ed25519 expanded private key for a vanity .onion address. Leave blank to auto-generate.': 3,
  'Configure Relay': 4,
  'Configure Tor relay and bridge settings': 5,
  'Tor SOCKS Proxy': 6,
  Enabled: 7,
  Nickname: 8,
  'Contact Info': 9,
  'Bridge Mode': 10,
  'OR Port': 11,
  'Bandwidth Rate': 12,
  'Bandwidth Burst': 13,
  'Tor Relay OR Port': 14,
  'Tor relay port for the Tor network': 15,
  'Add Onion Service': 16,
  'Add a Tor onion service for this URL': 17,
  'Delete Onion Service': 18,
  'Remove a Tor onion service': 19,
  SSL: 20,
  'Serve this address with SSL': 21,
  Address: 22,
  'Create new address': 23,
  'Confirm you would like to delete this .onion address': 24,
  'This onion address already has an SSL binding for this port': 25,
  'This onion address already has a non-SSL binding for this port': 26,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
