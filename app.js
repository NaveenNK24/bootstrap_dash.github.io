var projectObjects = [

    {
        id: 0,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'
    },
    {
        id: 1,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'

    },
    {
        id: 2,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'

    },
    {
        id: 3,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'
    }
];


function Update() {

    let projectList = document.querySelector('.project-list')
    let projectItems = ''

    for (project of projectObjects) {
        projectItems += `<tr>  
                            <td> <span class="number"> ${project.id}</span>${project.name}  </td>
                            <td> ${project.date} </td>
                            <td> ${project.start_time} </td>
                            <td> ${project.end_time} </td>
                            <td> ${project.duartion} </td>
                        </tr>`
    }

    projectList.innerHTML = projectItems

};
Update();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                console.log('passed');
                form.classList.add('was-validated')

                // let nameInput = document.getElementById('validationCustom01');
                // let dateInput = document.getElementById('validationCustom02');
                // let startTimeInput = document.getElementById('validationCustom03');
                // let endTimeInput = document.getElementById('validationCustom04');

                // const name1 = nameInput.value;
                // const date = dateInput.value;
                // const start_time = startTimeInput.value;
                // const end_time = endTimeInput.value;

                // idInc = projectObjects[projectObjects.length - 1].id;

                // projectObjects.push({
                //     id: idInc + 1,
                //     name: name1,
                //     date: date,
                //     start_time: start_time,
                //     end_time: end_time,
                //     duartion: '6:30'

                // });
            }
            

            //     console.log(projectObjects);
            }, false)
            
        })
        // Update();
})()

(function(){
    document.querySelector('#msbo').addEventListener('click', function(){
      document.querySelector('body').classList.toggle('msb-x');
      });
  }());