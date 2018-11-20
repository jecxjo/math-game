class ListGenerator {
  constructor(list) {
    this._list = list
  }

  next() {
    let length = this._list.length
    if (length === 0) {
      return null
    }

    let index = Math.floor(Math.random() * (length - 1))

    let value = this._list.splice(index, 1)

    return value[0]
  }

  all() {
    let res = []
    let tmp = this.next()
    do {
      res.push(tmp)
      tmp = this.next()
    } while (tmp !== null)

    return res
  }
}

export default ListGenerator;
