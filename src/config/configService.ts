class ConfigService {
  getValue(key: string): string {
    const value = process.env[key]
    if (!value) {
      throw new Error(`Missing env variable ${key}`)
    }
    return value
  }
}

export default new ConfigService()
