<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Monitoring Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            color: #0077cc;
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
            color: #555;
        }
        input[type="text"], input[type="email"], input[type="number"], select {
            width: calc(100% - 22px);
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #0077cc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #005fa3;
        }
        #labsList {
            margin-top: 20px;
        }
        .lab {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Real-Time Monitoring</h2>
        <form id="monitoringForm">
            <label for="patientName">Patient Name</label>
            <input type="text" id="patientName" name="patientName" required>

            <label for="age">Age</label>
            <input type="number" id="age" name="age" required>

            <label for="email">Email ID</label>
            <input type="email" id="email" name="email" required>

            <label for="contactNo">Contact Number</label>
            <input type="text" id="contactNo" name="contactNo" required>

            <label for="purpose">Booking Purpose</label>
            <select id="purpose" name="purpose" required>
                <option value="diabetes">Diabetes Monitoring</option>
                <option value="other">Other</option>
            </select>

            <label for="locationInput">Enter your location:</label>
            <input type="text" id="locationInput" name="locationInput" placeholder="e.g., Madurai, TN" required>

            <button type="button" onclick="searchNearbyLabs()">Show Nearby Labs</button>

            <div id="labsList"></div>
        </form>
    </div>

    <script>
        function searchNearbyLabs() {
            var location = document.getElementById("locationInput").value;
            if (location) {
                fetch(`geocode.php?address=${encodeURIComponent(location)}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'OK') {
                            var latitude = data.results[0].geometry.location.lat;
                            var longitude = data.results[0].geometry.location.lng;

                            fetch(`fetch_labs.php?latitude=${latitude}&longitude=${longitude}`)
                                .then(response => response.json())
                                .then(labs => {
                                    var labsList = document.getElementById("labsList");
                                    labsList.innerHTML = '<h3>Nearby Labs:</h3>';
                                    labs.forEach(lab => {
                                        labsList.innerHTML += `<div class="lab"><strong>${lab.name}</strong><br>${lab.address}</div>`;
                                    });
                                })
                                .catch(error => console.error('Error fetching labs:', error));
                        } else {
                            alert('Geocode was not successful for the following reason: ' + data.status);
                        }
                    })
                    .catch(error => console.error('Error with geocoding request:', error));
            } else {
                alert('Please enter a location.');
            }
        }
    </script>
</body>
</html>
