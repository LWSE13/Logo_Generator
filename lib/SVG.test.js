const { LogoTxt, SVG } = require('./SVG');
const { Circle, Square, Triangle } = require('./shapes');
describe('logoTXT', () => {
    it('should return 3 character long text that is the desired colour', () => {
        const logoTxt = new LogoTxt('ABC', 'red');
        expect(logoTxt.textGeneration()).toBe('<text x="150" y="140" font-size="40" text-anchor="middle" fill="red">ABC</text>')
    })
})

describe('SVG', () => {
    it('should return a SVG string with my desired shape and text', () => {
        const shapeGen = new Square('red');
        const textGen = new LogoTxt('ABC', 'red');
        const svg = new SVG(shapeGen, textGen);
        expect(svg.svgGeneration()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red"/><text x="150" y="140" font-size="40" text-anchor="middle" fill="red">ABC</text></svg>')
    })
})