const schedule = {
    trains: [],

    addTrain: function(trainNumber, arrivalTime, departureTime) {
        this.trains.push({
            trainNumber,
            arrivalTime,
            departureTime
        });
        this.displaySchedule();
    },

    displaySchedule: function() {
        const scheduleDiv = document.getElementById("trainSchedule");
        scheduleDiv.innerHTML = "";
        
        if (this.trains.length === 0) {
            scheduleDiv.innerHTML = "<p>No trains scheduled.</p>";
            return;
        }

        this.trains.forEach(train => {
            const trainDiv = document.createElement("div");
            trainDiv.classList.add("train-entry");
            trainDiv.innerHTML = `
                <strong>Train Number:</strong> ${train.trainNumber}, 
                <strong>Arrival:</strong> ${train.arrivalTime}, 
                <strong>Departure:</strong> ${train.departureTime}
            `;
            scheduleDiv.appendChild(trainDiv);
        });
    }
};

function addTrain() {
    const trainNumber = document.getElementById("trainNumber").value;
    const arrivalTime = document.getElementById("arrivalTime").value;
    const departureTime = document.getElementById("departureTime").value;

    if (trainNumber && arrivalTime && departureTime) {
        schedule.addTrain(trainNumber, arrivalTime, departureTime);
        clearForm();
    } else {
        alert("Please fill in all the fields.");
    }
}

function clearForm() {
    document.getElementById("trainNumber").value = "";
    document.getElementById("arrivalTime").value = "";
    document.getElementById("departureTime").value = "";
}
