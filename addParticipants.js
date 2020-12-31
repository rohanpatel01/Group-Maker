
let numberOfGroups;
let captain1;
window.addEventListener('load', () => {


    // Via local Storage
    numberOfGroups = localStorage.getItem("NumGroups");
    captain1 = localStorage.getItem("captain1");


})

function participants()
{
  console.log("number of groups: " + numberOfGroups);
  console.log("teamcaptain 1: " + captain1);
  if(document.getElementById("numParticipants").value != 0)
  {
      var i;
      // var teamCaptainNumber = 1;
      for (i = 0; i < document.getElementById('numParticipants').value; i++) 
      {
          // create element
          const newDiv = document.createElement("div");
          const newInput = document.createElement("input");
          const participantsDiv = document.getElementById("participants");
          const editButton = document.createElement("button");
          const deleteButton = document.createElement("button");
          // creating drop down list
          const newDropDown = document.createElement("select");
          
          
          //creating options for dropdown list
          var j = 1;
          for(j; j < numberOfGroups + 1; j++)
          {
            newDropDown.appendChild(new Option("Label" + j, "Value" + j));
          }

          
          // add style to created elements

          newDiv.style.width = "700px";
          newDiv.style.margin = "auto";
          newInput.style.placeholder = "Name";
          

          editButton.style.width = "50px";
          editButton.style.height = "25px";

          deleteButton.style.width = "50px";
          deleteButton.style.height = "25px";

          // put text field inside newly created div
          newDiv.appendChild(newInput);
          newDiv.appendChild(editButton);
          newDiv.appendChild(deleteButton);
          newDiv.appendChild(newDropDown);


          // put everything inside the already present participants div
          participantsDiv.appendChild(newDiv);
      }
      
      // document.getElementById('createTeamCaptains').innerText = "Redo";
      
  }
}