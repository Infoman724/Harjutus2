import "./styles.css" 

const myjson = [ 
  { 
    Car: { 
        Color: "Rose red" ,
        "Tinted windows": false,
        Wheels: "4",
        RoofCargo: "null",
        Entertaiment: "FM Radio",
        Accessories: "satnav, cruise control"
      },

     Car1: { 
       Color: "Navy blue" ,
       "Tinted windows": true,
       Wheels: "4",
       RoofCargo: "Thule",
       Entertaiment: "MP3, MP4 and MKV player harman/kardon speakers FM Radio Apple CarPlay/Android Auto Bowers & Wilkins Premium Sound speakers",
      Accessories: "self drive system, luggage cover"
      }     
  } 
];
document.getElementById("app").innerHTML = `
<div id="json">
  <h1>Car properties</h1>
  <p>Color: ${myjson[0].Car.Color}</p>
  <p>Tinted windows: ${myjson[0].Car["Tinted windows"]}</p>

  
<table>
<tr>
  <th>Property</th>
  <th>Car 0</th>
  <th>Car 1</th>
</tr>
<tr>
  <td>Color</td>
  <td>${myjson[0].Car.Color}</td>
  <td>${myjson[0].Car1.Color}</td>
</tr>
<tr>
  <td>Tinted windows</td>
  <td>${myjson[0].Car["Tinted windows"]}</td>
  <td>${myjson[0].Car1["Tinted windows"]}</td>
</tr>
<tr>
  <td>Wheels</td>
  <td>${myjson[0].Car.Wheels}</td>
  <td>${myjson[0].Car1.Wheels}</td>
</tr>
<tr>
  <td>Roof cargo</td>
  <td>${myjson[0].Car.RoofCargo}</td>
  <td>${myjson[0].Car1.Wheels}</td>
</tr>
<tr>
  <td>Entertainment</td>
  <td>${myjson[0].Car.Entertaiment}</td>
  <td>${myjson[0].Car1.Entertaiment}</td>
</tr>
<tr>
  <td>Accessories</td>
  <td>${myjson[0].Car.Accessories}</td>
  <td>${myjson[0].Car1.Entertaiment}</td>
</tr>
</table>
</div>
`;

