var exerciseObjects = [

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

    let exerciseList = document.querySelector('.exercise-list')
    let exerciseItems = ''

    for (exercise of exerciseObjects) {
        //console.log(people[i].name);
        // exerciseItems += '<tr>' + '<td>' + exercise.id + '</td>' + '<td>' + exercise.name + '</td>' + '</tr>'
        exerciseItems += `<tr>  
                            <td>  ${exercise.id}.${exercise.name}  </td>
                            <td> ${exercise.date} </td>
                            <td> ${exercise.start_time} </td>
                            <td> ${exercise.end_time} </td>
                            <td> ${exercise.duartion} </td>
                        </tr>`
    }

    exerciseList.innerHTML = exerciseItems

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

                // idInc = exerciseObjects[exerciseObjects.length - 1].id;

                // exerciseObjects.push({
                //     id: idInc + 1,
                //     name: name1,
                //     date: date,
                //     start_time: start_time,
                //     end_time: end_time,
                //     duartion: '6:30'

                // });
            }
            

            //     console.log(exerciseObjects);
            }, false)
            
        })
        // Update();
})()