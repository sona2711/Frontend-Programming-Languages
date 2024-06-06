import {getPrevDate} from "../calendar";
import { getNextDate } from "../calendar";
// const { getNextDate} = require('../calendar');

describe("getNextDate", () => {
    it("should return the correct HTML string for next month dates", () => {
      const lastDayIndex = 1;
      const year = 2024;
      const month = 5;
  
      const result = getNextDate(lastDayIndex, year, month);
  
      const expectedDates = ['1', '2', '3'];
  
      expectedDates.forEach(date => {
        expect(result.includes(`<div class="date inactive">${date}</div>`)).toBe(true);
      });
    });
  });


describe("getPrevDate", () => {
  it("should return the correct HTML string for previous month dates", () => {
    const firstDayIndex = 3;
    const year = 2024;
    const month = 5;

    const result = getPrevDate(firstDayIndex, year, month);

    const expectedDates = ['28', '29', '30'];

    expectedDates.forEach(date => {
      expect(result.includes(`<div class="date inactive">${date}</div>`)).toBe(true);
    });
  });
});
   

describe("TEST", () => {
  it("must be return correct value", () => {
    expect(1+1).toEqual(2);
  })

})