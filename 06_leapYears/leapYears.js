const leapYears = function(year) {
    const yearDivisiblebyfour = year % 4 === 0;
    const yearIsCenturie = year % 100 === 0;
    const yearDivisibleByFourHundred = year % 400 === 0;

    if (yearDivisiblebyfour && (!yearIsCenturie || yearDivisibleByFourHundred))
        {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
