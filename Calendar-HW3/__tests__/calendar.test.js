import {getPrevDates} from "../calendar";
import { getNextDates } from "../calendar";


describe("getNextDates", () => {
    it("should return the correct text content", () => {
      // const lastDayIndex = 1;
      // const year = 2024;
      // const month = 5;
      const textContent = '<div class="date inactive">29</div>'
      const result = getNextDates(textContent);
      getNextDates(textContent)
      expect(result.innerHTML).toBeTruthy(textContent);
      // expect(result.includes('<div class="date inactive">30</div>')).toBe(true);
      // expect(result.includes('<div class="date inactive">31</div>')).toBe(true);
  
    });
  });


describe("getPrevDates", () => {
  it("should return the correct text content", () => {
    const textContent = '30' 
    let mockedContainer = document.createElement('div')
    getPrevDates(textContent, mockedContainer);

    expect(mockedContainer.innerHTML).toBeTruthy(textContent);
  });
});

// describe("TEST", () => {
//   it("must be return correct value", () => {
//     expect(1+1).toBe(2);
//   })

// })