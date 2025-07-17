import { retry } from "rxjs";

// Get 3-letter abbreviation of the day (1 = Monday)
function getDayAbbreviation(number: number) {
    let day: string;

    switch (number) {
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        case 7:
            day = "Sun";
            break;
        default:
            day = "Invalid";
            break;
    }

    return day;
}

// Get 3-letter abbreviation of the month (1 = January)
function getMonthAbbreviation(number: number) {
    let month: string;

    switch (number) {
        case 1:
            month = "Jan";
            break;
        case 2:
            month = "Feb";
            break;
        case 3:
            month = "Mar";
            break;
        case 4:
            month = "Apr";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Jun";
            break;
        case 7:
            month = "Jul";
            break;
        case 8:
            month = "Aug";
            break;
        case 9:
            month = "Sep";
            break;
        case 10:
            month = "Oct";
            break;
        case 11:
            month = "Nov";
            break;
        case 12:
            month = "Dec";
            break;
        default:
            month = "Invalid";
            break;
    }

    return month;
}

export function generateAttendanceId(date: Date) {
    const day = getDayAbbreviation(date.getDay());
    const month = getMonthAbbreviation(date.getMonth())

    return day + date.getDate() + month + date.getFullYear().toString() + date.getHours().toString().concat(":" + date.getMinutes().toString())



};


