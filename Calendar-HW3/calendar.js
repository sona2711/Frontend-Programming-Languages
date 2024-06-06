const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevBtn");
const nextMonth = document.getElementById("nextBtn");
const dateWrapper = document.getElementById("date-wrapper");


const currenteDate = new Date();

// Calendar Functionality

function  getMonthYear() {
    let options = {
        month :"long",
        year: "numeric",
        } 

    const stringMonthYear = currenteDate.toLocaleDateString("en-US", options);

    if (stringMonthYear){
        return monthYear.innerHTML = stringMonthYear
    } else {
        console.error("Element not found in the DOM");
    }   

}
  
  
function getPrevDate(firstDayIndex,year, month ) {
    let acc = ""
    for(let i= firstDayIndex; i > 0; i--){
        const prevDate = new Date(year, month, 0 - i +1);
        acc += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }
    console.log(acc)
    return acc
    
}

function  getNextDate(lastDayIndex,year, month  ) {
    let acc =""
    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(year, month + 1, i);
        acc += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }
    console.log(acc)
    return acc
}

function  drawCalendar() {
    const year = currenteDate.getFullYear();
    const month = currenteDate.getMonth();

    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1 , 0);
    const totalDays = lastDay.getDate()

    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    let dates = "";


    dates += getPrevDate(firstDayIndex, year, month);
    for(let i = 1; i <= totalDays; i++){
        const date = new Date(year,month,i);
        const activeClass = date.toDateString() === new Date().toDateString() ? "active" : "";
        dates +=`<div class="date ${activeClass}">${i}</div>`
    }

    dates += getNextDate(lastDayIndex,year, month);

    if (dates){
        return dateWrapper.innerHTML = dates
    } else {
        console.error("Element not found in the DOM");
    } 
}

getMonthYear();
drawCalendar ();


//Buttons functionality

prevMonth.addEventListener("click", () =>{ 
    currenteDate.setMonth(currenteDate.getMonth() - 1)
    getMonthYear();
    drawCalendar ();
   })


nextMonth.addEventListener("click", () =>{
    currenteDate.setMonth(currenteDate.getMonth() + 1)
    getMonthYear();
    drawCalendar ();
    })

// module.exports = { getNextDate };