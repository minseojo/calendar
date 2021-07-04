const yearMonthForm = document.getElementById("yearMonth-form");
const calendar = document.getElementById("calendar-form");
const tbCalendar = document.getElementById("calendar-form");
const tbCalendarYM = document.getElementById("yearMonth-form");
const today = new Date(); // 오늘 초기화 따로 표시
let date = new Date(); //이전 달, 다음 달 버튼 누르면 변동
let dateYear = date.getFullYear(); //이전 달, 다음 달 버튼 누르면 변동
let dateMonth = date.getMonth()+1;//이전 달, 다음 달 버튼 누르면 변동


function deleteCalendar() { // 달력 지우기
    while(calendar.rows.length > 0){ 
        calendar.deleteRow(0); 
    }
}

function handleButton(evnet) {
    let pre_next_button = event.target.id;
    if(pre_next_button === "preventMonth-button") { // wjs ekf 
        dateMonth-=1;
        date = new Date(date.getFullYear(), date.getMonth()-1, date.getDate());
    } else { // 다음 달
        dateMonth+=1;
        date = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
    }
    if(dateMonth<1) {
        dateYear-=1;
        dateMonth=12;
    } else if(dateMonth>12){
        dateYear+=1;
        dateMonth=1;
    }
    buildCalendar();
}

const preButton = document.getElementById("preventMonth-button");
const nextButton = document.getElementById("nextMonth-button");

preButton.addEventListener("click", handleButton);
nextButton.addEventListener("click", handleButton);

function buildCalendar(){ //달력 만들기
    deleteCalendar(); // 달력 지우고 다시
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0);
    tbCalendarYM.innerHTML = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월"; 
 /*
    while (tbCalendar.rows.length > 2) {
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
    }
*/
    let row = null;
    row = tbCalendar.insertRow();
    let days = 0;

    for (i=0; i<firstDate.getDay(); i++) {
        cell = row.insertCell();
        days = days + 1;
    }

    /*달력 출력*/
    for (i=1; i<=lastDate.getDate(); i++) { 
        cell = row.insertCell();
        cell.innerHTML = i;
        days = days+1;
        if ((days%7) === 1) {
            cell.innerHTML = "<font color=red>" + i
        }    

        if ((days%7) === 0){
            cell.innerHTML = "<font color=blue>" + i
            row = calendar.insertRow();
        }

        /*오늘의 날짜에 노란색 칠하기*/
        if (today.getFullYear() == date.getFullYear()
            && today.getMonth() == date.getMonth()
            && i == date.getDate()) {
                cell.bgColor = "yellow";
        }  
    }
    
    /*31이후로 나머지 빈칸 만들기 */
    let index =7-(lastDate.getDate()-(7-firstDate.getDay()))%7;
    if(index!==7) {
        for(i=0; i<index; i++) {
            cell = row.insertCell();
        }
    }

}

buildCalendar();