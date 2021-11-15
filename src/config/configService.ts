class ConfigService {
  public readonly FEED_LIST_BREAKPOINT = 970

  getValue(key: string): string {
    const value = process.env[key]
    if (!value) {
      throw new Error(`Missing env variable ${key}`)
    }
    return value
  }
}

export default new ConfigService()
