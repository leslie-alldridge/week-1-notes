const game = require('../game') // this is the line to add

test('scores a gutterball frame', function () {
    const frame = [0, 0]
    const expected = 0
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
    const frame = [2, 3]
    const expected = 5
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test('scores spare frame', function () {
    const frame = [6, 4]
    const nextFrame = [2,4]
    const expected = 12
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
    const frame = [10, 0]
    const nextFrame = [4, 5]
    const expected = 19;
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const nextNextFrame = [5, 2]
    const expected = 25;
    const actual = game.scoreFrame(frame, nextFrame, nextNextFrame) 
    expect(actual).toBe(expected)
})

test('perfect ending frame 9', () => {
    const frame = [10, 0]
    const nextFrame = [10, 10, 10]
    const expected = 30

    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})


test('perfect ending frame 10', () => {
    const frame = [10, 10, 10]
    const expected = 30
    
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})


test('score a simple game', () => {
    var frames = [
      [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
    ]
    const expected = 119

    const actual = game.scoreFrame(frames)
    
})

test('score a perfect game', () => {
    const frames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
    ]
    
    const expected = 141
    const actual = game.scoreGame(frames)
    expect(actual).toBe(expected)
})


test('score a complex game', () => {
    const frames = [
       [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
    ]

    const expected = 300
    const actual = game.scoreGame(frames)
    expect(actual).toBe(expected)
})


test('test setup working', function () {
    expect(true).toBeTruthy()
})