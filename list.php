<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    table,tr,td,td{
      border: 1px solid red;
      border-collapse: collapse;
      padding: 5px;
      align-items: center;
    }
  </style>
</head>
<body>
  
</body>
</html>

<?php
include 'connect.php';
$query = "SELECT * FROM login";
$run = mysqli_query($conn, $query);
if(mysqli_num_rows($run)>0){
   
    echo "<table>
        <tr>
        <th>name</th>
        <th>password</th>
        </tr>";
        while($row = mysqli_fetch_assoc($run)){
            echo "<tr><td>". $row['name'].
            "</td><td>".$row['password']."</td></tr>" ;
    
        }
        echo "</table>";
}

?>