import Character from '../Character.js'

test('damage', () => {
    const Snow = new Character('snow', 'Bowman');
    const result = Snow.damage(15);
    expect(Snow.damage(15).toEqual(result));
});
