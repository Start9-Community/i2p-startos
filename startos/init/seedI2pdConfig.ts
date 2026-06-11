import {
  i2pdConfig,
  generateI2pdConf,
  generateTunnelsConf,
} from '../fileModels/i2pd'
import { sdk } from '../sdk'

export const seedI2pdConfig = sdk.setupOnInit(async (effects) => {
  // Seeds the schema's defaults into a fresh config.json; no-op once populated
  await i2pdConfig.merge(effects, {})

  // Re-emit the conf files so they always reflect config.json — on update this
  // picks up generator changes shipped with the new package version
  const config = await i2pdConfig.read().once()
  if (config) {
    await sdk.volumes.i2pd.writeFile(
      'etc/i2pd/i2pd.conf',
      generateI2pdConf(config),
    )
    await sdk.volumes.i2pd.writeFile(
      'etc/i2pd/tunnels.conf',
      generateTunnelsConf(config),
    )
  }
})
