const returnFirstTwoDrivers = (drivers) => {
    let firstTwo = [drivers[0], drivers[1]]
    return firstTwo
}
const returnLastTwoDrivers = (drivers) => {
    let lastTwo = [drivers[drivers.length-2], drivers[drivers.length-1]]
    return lastTwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult){
    return function (fare){
        return fare * mult
    }
}

const fareDoubler = (fare) => fare*2
const fareTripler = (fare) => fare*3

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}