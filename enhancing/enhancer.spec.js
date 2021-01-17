const enhancer = require('./enhancer.js');
// test away!

var items = [
    { name: 'sword',
    durability: 90,
    enhancement: 15 },
    { name: 'armor',
    durability: 100,
    enhancement: 20 },
    { name: 'gun',
    durability: 60,
    enhancement: 13 }
]

describe('enhancer unit tests', () => {

    it('repairs', () => {
        expect(enhancer.repair(items[0]))
        .toEqual({ name: 'sword', durability: 100, enhancement: 15 })

        expect(enhancer.repair(items[1]))
        .toEqual({ name: 'armor', durability: 100, enhancement: 20 })

        expect(enhancer.repair(items[2]))
        .toEqual({ name: 'gun', durability: 100, enhancement: 13 })
    })

    it('enhancement succeeds', () => {

        expect(enhancer.success(items[0]))
        .toEqual({ name: 'sword', durability: 90, enhancement: 16 })

        expect(enhancer.success(items[1]))
        .toEqual({ name: 'armor', durability: 100, enhancement: 20 })

        expect(enhancer.success(items[2]))
        .toEqual({ name: 'gun', durability: 60, enhancement: 14 })
    })

    it('enhancement fails', () => {

        expect(enhancer.fail(items[0]))
        .toEqual({ name: 'sword', durability: 90, enhancement: 5})

        expect(enhancer.fail(items[2]))
        .toEqual({ name: 'gun', durability: 60, enhancement: 8})

        expect(enhancer.fail(items[1]))
        .toEqual({ name: 'armor', durability: 100, enhancement: 19})

    })

})