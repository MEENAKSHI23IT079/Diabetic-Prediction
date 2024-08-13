<?php
$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "your_database_name"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get latitude and longitude from request
$latitude = $_GET['latitude'];
$longitude = $_GET['longitude'];

// Define the search radius (in kilometers)
$radius = 5; // 5 km

// SQL query to find nearby labs
$sql = "
    SELECT id, name, address, latitude, longitude,
           ( 6371 * ACOS( COS( RADIANS(?) ) * COS( RADIANS( latitude ) ) * COS( RADIANS( longitude ) - RADIANS(?) ) + SIN( RADIANS(?) ) * SIN( RADIANS( latitude ) ) ) ) AS distance
    FROM labs
    HAVING distance < ?
    ORDER BY distance
";

// Prepare and execute the query
$stmt = $conn->prepare($sql);
$stmt->bind_param("dddi", $latitude, $longitude, $latitude, $radius);
$stmt->execute();
$result = $stmt->get_result();

// Fetch results and return as JSON
$labs = array();
while ($row = $result->fetch_assoc()) {
    $labs[] = $row;
}

header('Content-Type: application/json');
echo json_encode($labs);

// Close connection
$stmt->close();
$conn->close();
?>
