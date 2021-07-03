import { squareStyle } from '../components/Square'

describe('The squareStyle function', () => {
    it('Sets a light style for square a8', () => {
        const result = squareStyle(8, 'a')

        expect(result).toMatch('light')
    })

    it('Sets a dark style for square b8', () => {
        const result = squareStyle(8, 'b')

        expect(result).toMatch('dark')
    })

    it('Sets a dark style for square a7', () => {
        const result = squareStyle(7, 'a')

        expect(result).toMatch('dark')
    })
})