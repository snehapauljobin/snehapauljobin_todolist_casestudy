var table=document.getElementById("myTable");
let tablegrocery=document.getElementById("tablegrocery");
let th=document.querySelectorAll("th");


document.addEventListener('DOMContentLoaded', function() {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendar.Draggable;

  var containerEl = document.getElementById('external-events');
  var calendarEl = document.getElementById('calendar');
  var checkbox = document.getElementById('drop-remove');

  // initialize the external events
  // -----------------------------------------------------------------

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });

  // initialize the calendar
  // -----------------------------------------------------------------

  var calendar = new Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
     
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function(info) {
      // is the "remove after drop" checkbox checked?
      if (checkbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    }
  });

  calendar.render();
});







































function ajax(){
    // creating an XHR object
var xhttp=new XMLHttpRequest();
// event listener
xhttp.onreadystatechange=function(){
    // condition
    if(this.readyState==4&& this.status==200){
// for converting JSON format to normal         

var response=JSON.parse(this.responseText); 
// console.log(response);
var output="";
output+=`<tr>`

output+=`<th>Pin the pending tasks</th>`;

output+=`<tr>`
for(var i=0;i<response.length;i++){
    output+=`<tr>`;
if(response[i].completed==false){
  
 output+=`<td class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>${response[i].title}</td>`;

}
 

output+=`</tr>`;
}
  table.innerHTML=output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}







