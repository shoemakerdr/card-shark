'use strict'

// example use:
//
// const jackOfHearts = cardTemplater('J', 'heart')
//
// console.log(jackOfHearts)
//       _____
//      | J   |
//      |     |
//      |   ♥ |
//      |_____|


const padRank = rank => rank.length < 2 ? ` ${rank}` : rank

const cardTemplater = (rank, suit) => {
    suits = {
        spade: '♠',
        club: '♣',
        heart: '♥',
        diamond: '♦'
    }
    const paddedRank = padRank(rank)
    const suitSymbol = suits[suit]
    return `
     _____
    |${paddedRank}   |
    |     |
    |   ${suitSymbol} |
    |_____|
    `
}

module.exports = cardTemplater
