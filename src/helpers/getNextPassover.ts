import {HebrewCalendar, HDate, Location, Event} from "@hebcal/core";

export interface PassoverDates {
    start: Date,
    end: Date
}

const getNextPassover = () : PassoverDates => {
    const today:Date = new Date();
    const day= today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const passoverStartDescription: string = "Erev Pesach";
    const passoverEndDescriotion: string = "Pesach VIII"

    const options = {
        year: year,
        isHebrewHear: false
    }

    let passoverStart: Date = new Date();
    let passoverEnd: Date = new Date();


    const events = HebrewCalendar.calendar(options);

    events.forEach(event => {
        if (event.desc === passoverStartDescription) {
            passoverStart = event.getDate().greg();
        }
        if (event.desc === passoverEndDescriotion) {
            passoverEnd = event.getDate().greg();
        }
    })

    const passoverDates = {
        start: passoverStart,
        end: passoverEnd
    } as PassoverDates

    return passoverDates;
}

export default getNextPassover;