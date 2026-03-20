import { utils } from '@start9labs/start-sdk'
import { torrc } from '../fileModels/torrc'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

export const relayInputSpec = InputSpec.of({
  enabled: Value.toggle({
    name: i18n('Enabled'),
    default: false,
  }),
  nickname: Value.text({
    name: i18n('Nickname'),
    description: null,
    required: false,
    default: 'StartOSRelay',
    placeholder: 'StartOSRelay',
    patterns: [
      {
        regex: '^[a-zA-Z0-9]{1,19}$',
        description: 'Must be 1-19 alphanumeric characters',
      },
    ],
    masked: false,
    inputmode: 'text',
    minLength: 1,
    maxLength: 19,
  }),
  contactInfo: Value.text({
    name: i18n('Contact Info'),
    description: null,
    required: false,
    default: null,
    placeholder: 'email@example.com',
    patterns: [utils.Patterns.email],
    masked: false,
    inputmode: 'email',
    minLength: null,
    maxLength: null,
  }),
  bridge: Value.toggle({
    name: i18n('Bridge Mode'),
    default: false,
  }),
  orPort: Value.number({
    name: i18n('OR Port'),
    description: null,
    required: false,
    default: 9001,
    min: 1,
    max: 65535,
    integer: true,
    placeholder: null,
    units: null,
  }),
  bandwidthRate: Value.number({
    name: i18n('Bandwidth Rate'),
    description: null,
    required: false,
    default: 1,
    min: 1,
    max: null,
    integer: true,
    placeholder: null,
    units: 'MB/s',
  }),
  bandwidthBurst: Value.number({
    name: i18n('Bandwidth Burst'),
    description: null,
    required: false,
    default: 2,
    min: 1,
    max: null,
    integer: true,
    placeholder: null,
    units: 'MB/s',
  }),
})

export const configureRelay = sdk.Action.withInput(
  // id
  'configure-relay',

  // metadata
  async () => ({
    name: i18n('Configure Relay'),
    description: i18n('Configure Tor relay and bridge settings'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  // input spec
  relayInputSpec,

  // pre-fill from current config; InputSpec defaults fill any undefined fields
  async ({ effects }) => {
    return (await torrc.read((s) => s.relay).once()) ?? {}
  },

  // execution: merge relay input, converting nulls to undefined for zod .catch() defaults
  async ({ effects, input }) => {
    await torrc.merge(effects, {
      relay: {
        enabled: input.enabled,
        nickname: input.nickname ?? undefined,
        contactInfo: input.contactInfo ?? undefined,
        bridge: input.bridge,
        orPort: input.orPort ?? undefined,
        bandwidthRate: input.bandwidthRate ?? undefined,
        bandwidthBurst: input.bandwidthBurst ?? undefined,
      },
    })
  },
)
