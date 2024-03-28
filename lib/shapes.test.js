const { Circle, Square, Triangle } = require('./shapes');

describe('shapes', () => {
    describe('Circle', () => {
        it ('should correctly return a circle SVG string with the desired deimensions', () => {
            const circleTest = new Circle('red');
            expect(circleTest.shapeGeneration()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>')
        })
    })
    describe('Square', () => {
        it ('should correctly return a square SVG string with the desired deimensions', () => {
            const squareTest = new Square ('blue', 50);
            expect(squareTest.shapeGeneration()).toBe('<rect x="90" y="40" width="120" height="120" fill="blue"/>')
        })
    })
    describe('Triangle', () => {
        it ('should correctly return a triangle SVG string with the desired deimensions', () => {
            const triangleTest = new Triangle ('green', 50);
            expect(triangleTest.shapeGeneration()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="green"/>`)
        })
    })
})