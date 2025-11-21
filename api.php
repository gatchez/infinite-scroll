<?php
header("Content-Type: application/json");

// Load API key from environment
$apiKey = getenv("UNSPLASH_API_KEY");

if (!$apiKey) {
    echo json_encode([
        "error" => "API key not set on server. See README.md for instructions."
    ]);
    exit;
}

// Number of photos per request
$count = 30;

// Unsplash API URL (won't work without real API key)
$apiUrl = "https://api.unsplash.com/photos/random/?client_id=" . urlencode($apiKey) . "&count=" . $count;

/*
// Uncomment below to fetch real images locally
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if (!$response) {
    echo json_encode(["error" => "Failed to fetch data", "details" => $error]);
    exit;
}

echo $response;
*/

// Placeholder message for GitHub
echo json_encode([
    "message" => "This is a placeholder backend. Set your API key on a server to fetch real images."
]);
