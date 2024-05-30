const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevBtn");
const nextMonth = document.getElementById("nextBtn");
const dateWrapper = document.getElementById("date-wrapper");

const currenteDate = new Date();


//Date Functionality

const drawCalendar = () => {
    const year = currenteDate.getFullYear();
    const month = currenteDate.getMonth();

    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1 , 0);
    const totalDays = lastDay.getDate()

    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();


    let options = {
        month :"long",
        year: "numeric",
        } 

    const stringMonthYear = currenteDate.toLocaleDateString("en-US", options);
    monthYear.textContent = stringMonthYear;
    






}



    // Buttons functionality

    
    prevMonth.addEventListener("click", () =>{
        currenteDate.setMonth(currenteDate.getMonth() - 1)
        drawCalendar()
    })

    nextMonth.addEventListener("click", () =>{
        currenteDate.setMonth(currenteDate.getMonth() + 1)
        drawCalendar()
    })


