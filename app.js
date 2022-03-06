var projectObjects = [
{
    id: 0,
    name: 'Deadlift',
    date: 'May 21 2020',
    start_time: '01:10pm',
    end_time: '07:40pm',
    duartion: '6:30',
    indicator: "info"
},
{
    id: 1,
    name: 'Deadlift',
    date: 'May 21 2020',
    start_time: '01:10pm',
    end_time: '07:40pm',
    duartion: '6:30',
    indicator: "primary"

},
{
    id: 2,
    name: 'Deadlift',
    date: 'May 21 2020',
    start_time: '01:10pm',
    end_time: '07:40pm',
    duartion: '6:30',
    indicator: "warning"

},
{
    id: 3,
    name: 'Deadlift',
    date: 'May 21 2020',
    start_time: '01:10pm',
    end_time: '07:40pm',
    duartion: '6:30',
    indicator: "secondary"
}
];

function Update() {
    let projectList = document.querySelector('.project-list')
    let projectItems = ''
    for (project of projectObjects) {
        projectItems += `<tr>  
        <td> <div class="me-3 badge  number number-${project.indicator}" >
        ${project.id}</div>${project.name}  </td>
        <td> ${project.date} </td>
        <td> ${project.start_time} </td>
        <td> ${project.end_time} </td>
        <td> ${project.duartion} </td>
        </tr>`
    }
    projectList.innerHTML = projectItems
};
Update();

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                console.log('passed');
                form.classList.add('was-validated')
            }
        }, false)

    })
})();

function addRuler() {
    jQuery("ul.nav.navbar-nav").append("<hr class='sidebar-sep'/>");
}
addRuler();
(function () {
 document.querySelector('#msbo').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('msb-x');
});
}());