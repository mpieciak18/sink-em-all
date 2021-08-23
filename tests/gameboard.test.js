const createGameboard = require('../scripts/gameboard');
const createShip = require('../scripts/ship');

test('Create gameboard object and return positions property with (blank) spots 1-100', () => {
    const board = createGameboard();
    const spots = board.positions;
    const testSpots = {};
    for (let i = 1; i <= 100; i++) {
        testSpots[i] = {
            occupied: false,
            ship: null,
            hit: false
        };
    };
    expect(spots).toEqual(testSpots);
});

test('Create gameboard object, create ship, and return ship\'s health', () => {
    const board = createGameboard();
    board.initShip(0, 5, []);
    expect(board.ships[0].health).toBe(5);
});

test('Create gameboard object, create ship that occupies spots, and check if a spot is occupied', () => {
    const board = createGameboard();
    board.initShip(0, 5, [25, 35, 45, 55, 65]);
    expect(board.positions[45].occupied).toBe(true);
});

test('Create gameboard object, create ship that occupies spots, receive attack, and check if ship is damaged', () => {
    const board = createGameboard();
    board.initShip(0, 5, [25, 35, 45, 55, 65]);
    board.receiveAttack(45)
    expect(board.ships[0].health).toBe(4);
});