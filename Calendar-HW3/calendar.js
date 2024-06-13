 window.onload = function () {
    const monthYear = document.getElementById("monthYear");
    const prevMonth = document.getElementById("prevBtn");
    const nextMonth = document.getElementById("nextBtn");
    const dateWrapper = document.getElementById("date-wrapper");

    let currentDate = new Date();
    let notes = JSON.parse(localStorage.getItem('notes')) || {};

    function render() {
        getMonthYear(currentDate, monthYear);
        drawCalendar(currentDate, dateWrapper, notes);
        addNote(dateWrapper, notes);
    };

    function getMonthYear (date, element = {}){
        const options = { month: "long", year: "numeric" };
        element.textContent = date.toLocaleDateString("en-US", options);
    };

    prevMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        render();
    });

    nextMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        render();
    });

    //Part of adding a calendar date
    function drawCalendar(date, element, notes) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();
        let dates = "";

        dates += getPrevDates(firstDayIndex, year, month);
        for (let i = 1; i <= totalDays; i++) {
            const day = new Date(year, month, i);
            const activeClass = day.toDateString() === new Date().toDateString() ? "active" : "";
            const notesForDate = getNotesForDate(day, notes);
            dates += `<div class="date" data-date="${day.toDateString()}">
                        <p class="${activeClass}">${i}</p>
                        <div class="notes">${notesForDate}</div>
                        <div class="note-input">
                            <input class="note-text" placeholder="Add note" />
                            <button class="save-note">Save</button>
                        </div>
                      </div>`;
        }
        dates += getNextDates(lastDayIndex, year, month);
        element.innerHTML = dates;
    };



    //Part of adding notes to date

    function getNotesForDate(date, notes) {
        const dateStr = date.toDateString();
        const notesForDate = notes[dateStr] || [];
        return notesForDate.map(note => `<div class="note">${note}<button class="delete-note">x</button></div>`).join('');
    };

    function addNote (element, notes){
        const dates = element.querySelectorAll('.date');
        dates.forEach(date => {
            date.addEventListener('click', (el) => {
                if (el.target.tagName !== 'BUTTON') {
                    toggleNoteInput(date);
                }
            });
        });

        const saveButtons = element.querySelectorAll('.save-note');
        saveButtons.forEach(button => {
            button.addEventListener('click', (el) => {
                const dateElement = el.target.closest('.date');
                saveNoteForDate(dateElement, notes);
            });
        });

        const deleteButtons = element.querySelectorAll('.delete-note');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (el) => {
                const noteElement = el.target.closest('.note');
                const dateElement = el.target.closest('.date');
                deleteNoteForDate(noteElement, dateElement, notes);
            });
        });
    };

    function toggleNoteInput(dateElement){
        const inputWrapper = dateElement.querySelector('.note-input');
        inputWrapper.style.display = inputWrapper.style.display === 'flex' ? 'none' : 'flex';
    };

    function saveNoteForDate (dateElement, notes){
        const input = dateElement.querySelector('input');
        const note = input.value.toString();
        if (note === '') return;

        const dateStr = dateElement.dataset.date;
        if (!notes[dateStr]) {
            notes[dateStr] = [];
        }
        notes[dateStr].push(note);
        localStorage.setItem('notes', JSON.stringify(notes));

        input.value = '';
        render();
    };

    function deleteNoteForDate(noteElement, dateElement, notes) {
        const dateStr = dateElement.dataset.date;
        const note = noteElement.textContent.slice(0, -1);
        notes[dateStr] = notes[dateStr].filter(n => n !== note);
        localStorage.setItem('notes', JSON.stringify(notes));

        render();
    };

    render();
    localStorage.clear()
}

 
 function getPrevDates (dayIndex, year, month){
    let acc = "";
    for (let i = dayIndex; i > 0; i--) {
        const prevDate = new Date(year, month, 0 - i + 1);
        acc += `<div class="date"><p class="inactive">${prevDate.getDate()}</p></div>`;
    }
    return acc;
};

function getNextDates (dayIndex, year, month){
    let acc = "";
    for (let i = 1; i <= 7 - dayIndex; i++) {
        const nextDate = new Date(year, month + 1, i);
        acc += `<div class="date"><p class="inactive">${nextDate.getDate()}</p></div>`;
    }
    return acc;
};
module.exports = {getNextDates,getPrevDates}