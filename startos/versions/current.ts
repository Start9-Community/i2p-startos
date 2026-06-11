import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.60.0:0',
  releaseNotes: {
    en_US: 'Initial release on the StartOS community registry',
    es_ES: 'Versión inicial en el registro comunitario de StartOS',
    de_DE: 'Erstveröffentlichung in der StartOS-Community-Registry',
    pl_PL: 'Pierwsze wydanie w rejestrze społeczności StartOS',
    fr_FR: 'Version initiale sur le registre communautaire de StartOS',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
