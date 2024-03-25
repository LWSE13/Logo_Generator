const { Circle, Square, Triangle } = require('./shapes');

describe('shapes', () => {
    describe('Circle', () => {
        it ('should correctly return a circle SVG string', () => {
            const circleTest = new Circle('red', 50);
            expect(circleTest.shapeGeneration()).toBe('<circle cx=25 cy=25 r=25 fill=red/>')
        })
    })
})