const JAPANESEHOLIDAYS = {
    '01-01' : 'New years Day',
    '10-01' : 'Coming-of-age-day',
    '11-02' : 'National foundation day',
    '23-02' : `The Emperor's Birthday`,
    '21-03' : `Vernal Equinox Day`,
    '29-04' : `Showa Day`,
    '03-05' : `Constitution Memorial Day`,
    '04-05' : `Greenery Day`,
    '05-05' : `Children's Day`,
    '18-07' : `Marine Day`,
    '11-08' : `Mountain Day`,
    '13-08' : `Obon`,
    '14-08' : `Obon`,
    '15-08' : `Obon`,
    '19-09' : `Respect for the Aged Day`,
    '23-09' : `Autumnal Equinox Day`,
    '10-10' : `Health-Sports Day`,
    '03-11' : `Culture Day`,
    '23-11' : `Labour Thanksgiving Day`
}
const AUSTRALIANHOLIDAYS = {
    '01-01' : 'New years Day',
    '01-03' : `Additional public holiday for New Year's day`,
    '01-26' : `Australia day`,
    '03-14' : `Canberra Day`,
    '04-05' : `Anzac Day`,
    '05-30' : `Reconciliation Day`,
    '06-13' : `Queen's Birthday`,
    '10-03' : `Labour Day`,
    '12-25' : `Christmas Day`,
    '12-26' : `Boxing Day`
}
let japanesedateexpression= /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/;
let australiandateexpression = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;

function datevalidation(date){
    if(date.match(australiandateexpression)){
        var day= date.match(/\d{2}/gm)[3]
        var month= date.match(/\d{2}/gm)[2]
        var year=date.match(/\d{4}/)
        var holiday=holidaymatcher(`${day}-${month}`, JAPANESEHOLIDAYS);
        return `${day}-${month}-${year} (${holiday}) in Japan`;
    }
    if(date.match(japanesedateexpression)){
        var day= date.match(/\d{2}/gm)[0]
        var month= date.match(/\d{2}/gm)[1]
        var year=date.match(/\d{4}/)
        var holiday=holidaymatcher(`${month}-${day}`, AUSTRALIANHOLIDAYS);
        return `${year}-${month}-${day} (${holiday}) in Australia`;
    }else{
        console.log('Invalid date format');
    }
}

const holidaymatcher = (date,holidaylist) => holidaylist[date] || "Not a holiday";

console.log(datevalidation('11-02-1996'));