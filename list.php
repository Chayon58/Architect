<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>User Cards with Styled Navbar</title>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <style>
    /* Font & Utility */
    .work-sans-font {
      font-family: "Work Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }

    .display-flex {
      display: flex;
    }

    .text-primary {
      color: #FF900E;
    }

    .text-gray {
      color: #424242;
    }

    .text-light-gray {
      color: #727272;
    }

    .bg-light {
      background-color: rgba(255, 144, 14, 0.1);
    }

    .btn-primary {
      background-color: #FF900E;
      color: white;
      padding: 20px 25px;
      font-size: 1.25rem;
      font-weight: 600;
      border-radius: 8px;
      border: none;
    }

    .navbar {
      justify-content: space-between;
      align-items: center;
      width: 1600px;
      margin: 0 auto;
      padding: 20px 40px;
      background-color: #f7f7f7;
    }

    .brand {
      font-weight: bold;
      font-size: 3rem;
    }

    .nav-links {
      list-style: none;
    }

    .nav-item {
      list-style: none;
      margin-right: 30px;
    }

    .nav-links.display-flex {
      gap: 20px;
    }

    .nav-link {
      text-decoration: none;
      color: #424242;
      font-size: 1rem;
      font-weight: 500;
    }

    .nav-link:hover {
      color: #FF900E;
    }

    .login {
      background-color: rgb(0, 255, 17);
      color: black;
      padding: 10px 20px;
      font-size: 1.1rem;
      font-weight: 500;
      border-radius: 8px;
      border: none;
    }

    .login:hover {
      background-color: #ff4d0082;
      color: blue;
      font-weight: bold;
    }

    /* Main Layout */
    html, body {
      height: 100%;
      margin: 0;
      font-family: "Work Sans", sans-serif;
      background: #f0f2f5;
    }

    .main-container {
      display: flex;
      height: calc(100vh - 80px);
    }

    .sidebar {
      width: 200px;
      background-color: #2c3e50;
      color: white;
      padding: 20px;
    }

    .sidebar h2 {
      font-size: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #fff3;
      padding-bottom: 10px;
    }

    .sidebar ul {
      list-style: none;
    }

    .sidebar ul li {
      margin: 15px 0;
      font-size: 16px;
      cursor: pointer;
    }

    .sidebar ul li:hover {
      color: #1abc9c;
    }

    .content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: auto;
      padding: 20px;
    }

    .card-container {
      display: flex;
      flex-direction: column;
      margin-top: 90px;
      gap: 20px;
      align-items: center;
    }

    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 20px;
      width: 300px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.15);
    }

    .card h3 {
      margin-top: 0;
      color: #2c3e50;
      font-size: 22px;
    }

    .card p {
      margin: 5px 0;
      color: #555;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <!-- Top Navbar -->
  <nav class="navbar display-flex work-sans-font">
    <h3 class="brand text-primary">Architect</h3>
    <ul class="nav-links display-flex">
      <li class="nav-item"><a href="#" class="nav-link text-gray">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-gray">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link text-gray">Contact Us</a></li>
      <li class="nav-item"><a href="login.html" class="nav-link login" id="loginBtn">Login</a></li>
    </ul>
  </nav>

  <!-- Main Layout -->
  <div class="main-container">
    <!-- Left Sidebar -->
    <div class="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>

    <!-- Center Content -->
    <div class="content">
      <div class="card-container">
        <?php
          include 'connect.php';
          $query = "SELECT * FROM login ORDER BY id DESC";
          $run = mysqli_query($conn, $query);

          if(mysqli_num_rows($run) > 0){
            while($row = mysqli_fetch_assoc($run)){
              echo '<div class="card">';
              echo '<h3>' . htmlspecialchars($row['name']) . '</h3>';
              echo '<p><strong>Password:</strong> ' . htmlspecialchars($row['password']) . '</p>';
              echo '</div>';
            }
          } else {
            echo "<p>No users found.</p>";
          }
        ?>
      </div>
    </div>

    <!-- Right Sidebar -->
    <div class="sidebar">
      <h2>Info</h2>
      <ul>
        <li>Status</li>
        <li>Logs</li>
        <li>Support</li>
      </ul>
    </div
