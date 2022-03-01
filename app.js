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



let name1 = null;
let date = null;
let start_time = null;
let end_time = null;
let duration = null;

function submitForm() {
    nameInput = document.getElementById('name');
    dateInput = document.getElementById('date');
    startTimeInput = document.getElementById('start_time');
    endTimeInput = document.getElementById('end_time');
    // durationInput = document.getElementById('duration');

console.log(nameInput);
console.log(dateInput);
console.log(startTimeInput);
console.log(endTimeInput);
// console.log(durationInput);

    const name1 = nameInput.value;
    const date = dateInput.value;
    const start_time = startTimeInput.value;
    const end_time = endTimeInput.value;
    // const duration = durationInput.value;

    // alert(`${firstName} ${lastName}`);
    console.log(`${name1} ${date} ${start_time} ${end_time} `)
    // ${duration}

    exerciseObjects.push({
        id: exerciseObjects[exerciseObjects.length-1].id,
        name: name1,
        date: date,
        start_time: start_time,
        end_time: end_time,
        duartion: '6:30'

    });

    console.log(exerciseObjects);
    Update();
    resetForm();
}

function resetForm() {
    nameInput.value = '';
    dateInput.value = '';
    startTimeInput.value = '';
    endTimeInput.value = '';
    // durationInput.value = '';
}
// resetForm();