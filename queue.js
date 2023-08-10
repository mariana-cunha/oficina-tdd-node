class Queue {
  elements
  constructor(){
    this.elements = []
  }

  size() {
    return this.elements.length
  }

  add(item) {
    return this.elements.push(item)
  }

  first(item) {
    return item[0]
  }

  remove(item) {
    return item.shift()
  }
  
}

module.exports = Queue