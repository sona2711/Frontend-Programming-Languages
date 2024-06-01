const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevBtn");
const nextMonth = document.getElementById("nextBtn");
const dateWrapper = document.getElementById("date-wrapper");


const currenteDate = new Date();
// const year = currenteDate.getFullYear();
// const month = currenteDate.getMonth();

// const firstDay = new Date(year, month, 0);
// const lastDay = new Date(year, month + 1 , 0);
// const totalDays = lastDay.getDate()

// const firstDayIndex = firstDay.getDay();
// const lastDayIndex = lastDay.getDay();
// let dates = "";


// // Calendar Functionality

// const setMonthYear = ()=> {
//     let options = {
//         month :"long",
//         year: "numeric",
//         } 

//     const stringMonthYear = currenteDate.toLocaleDateString("en-US", options);
//     monthYear.innerHTML = stringMonthYear;
// }
  
  
// const setPrevDate = () => {
//     for(let i= firstDayIndex; i > 0; i--){
//         const prevDate = new Date(year, month, 0 - i +1);
//         dates += `<div class="date inactive">${prevDate.getDate()}</div>`;
//  }
//     dateWrapper.innerHTML = dates
    
// }

// const drawCalendar = () => {
//     for(let i = 1; i <= totalDays; i++){
//     const date = new Date(year,month,i);
//     const activeClass = date.toDateString() === new Date().toDateString() ? "active" : "";
//     dates +=`<div class="date ${activeClass}">${i}</div>`
//     }
//     dateWrapper.innerHTML = dates
// }

// const setNextDate = () => {
//     for(let i = 1; i <= 7 - lastDayIndex; i++){
//     const nextDate = new Date(year, month + 1, i);
//     dates += `<div class="date inactive">${nextDate.getDate()}</div>`;
//     }
//     dateWrapper.innerHTML = dates
// }



// //Buttons functionality

// prevMonth.addEventListener("click", () =>{ 
//     currenteDate.setMonth(currenteDate.getMonth() - 1)
//         setMonthYear();
//         setPrevDate();
//         drawCalendar();
//         setNextDate();
//    })


// nextMonth.addEventListener("click", () =>{
//     currenteDate.setMonth(currenteDate.getMonth() + 1)
//         setMonthYear();
//         setPrevDate();
//         drawCalendar();
//         setNextD();
//     })






// old version works correctly
function drawCalendar() {

    const year = currenteDate.getFullYear();
    const month = currenteDate.getMonth();

    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1 , 0);
    const totalDays = lastDay.getDate()
   
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    let dates = "";
    
    //header innerHTML part
    let options = {
           month :"long",
            year: "numeric",
           } 
   
    const stringMonthYear = currenteDate.toLocaleDateString("en-US", options);
    monthYear.innerHTML = stringMonthYear;
      
      
    for(let i= firstDayIndex; i > 0; i--) {
        const prevDate = new Date(year, month, 0 - i +1);
        console.log(prevDate)
        dates += `<div class="date inactive">${prevDate.getDate()}</div>`;
        }
    
     for(let i = 1; i <= totalDays; i++){
        const date = new Date(year,month,i);
        const activeClass = date.toDateString() === new Date().toDateString() ? "active" : "";
        dates +=`<div class="date ${activeClass}">${i}</div>`
     }
     
       
     
     
     for(let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(year, month + 1, i);
        dates += `<div class="date inactive">${nextDate.getDate()}</div>`;
     }
    
     
     return dateWrapper.innerHTML = dates
    }
   
   
   
      // Buttons functionality

       prevMonth.addEventListener("click", () => { 
       currenteDate.setMonth(currenteDate.getMonth() - 1)
           drawCalendar();
          })
          
        nextMonth.addEventListener("click", () => {
           currenteDate.setMonth(currenteDate.getMonth() + 1)
           drawCalendar();  
       })