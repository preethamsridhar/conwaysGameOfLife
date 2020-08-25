export const makeItAlive = (x, y) => {
    return {
        type: 'MAKE_IT_ALIVE',
        cord: [x, y]
    }
}

export const killIt = (x, y) => {
    return {
        type: 'KILL_IT',
        cord: [x, y]
    }
}