const { Circle, Square, Triangle } = require('./shapes');

describe('shapes', () => {
    describe('Circle', () => {
        it ('should correctly return a circle SVG string with the desired deimensions', () => {
            const circleTest = new Circle('red', 50);
            expect(circleTest.shapeGeneration()).toBe('<circle cx=25 cy=25 r=25 fill=red/>')
        })
    })
    describe('Square', () => {
        it ('should correctly return a square SVG string with the desired deimensions', () => {
            const squareTest = new Square ('blue', 50);
            expect(squareTest.shapeGeneration()).toBe('<rect width=50 height=50 fill=blue/>')
        })
    })
    describe('Triangle', () => {
        it ('should correctly return a triangle SVG string with the desired deimensions', () => {
            const triangleTest = new Triangle ('green', 50);
            const expectedHeight = 50 * Math.sqrt(3) / 2;
            expect(triangleTest.shapeGeneration()).toBe(`<polygon points='0,${expectedHeight} 25,0 50,${expectedHeight}' fill='green'/>`)
        })
    })
})