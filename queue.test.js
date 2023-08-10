const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()

    expect(queue.size()).toBe(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()

    const names = ["ana", "beatriz"];
    names.push("mariana")

    expect(names).toContain("mariana")
    expect(queue.add(names)).toBe(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()

    const arrayMockado = [6, 1, 2, 3]

    expect(queue.first(arrayMockado)).toEqual(6)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()

    const arrayMockado = [9, 1, 2, 3]

    expect(queue.remove(arrayMockado)).toEqual(9)
  })
})