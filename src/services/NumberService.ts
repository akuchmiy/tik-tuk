class NumberService {
  private readonly lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  public formatNumber(number: number, digits = 2): string {
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    const item = [...this.lookup].reverse().find(function (item) {
      return number >= item.value
    })
    return item
      ? (number / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0'
  }
}

export default new NumberService()
