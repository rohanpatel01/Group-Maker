let timesCreateTeamCaptainsPressed = true;
let numParticipants = document.getElementById("numParticipants");




function createTeamCaptains() {

    if(timesCreateTeamCaptainsPressed)
    {
        var i;
        var teamCaptainNumber = 1;
        for (i = 0; i < document.getElementById('numGroups').value; i++) 
        {
            // create element
            const newContent = document.createElement("input");
            newContent.placeholder = "Team Captain " + teamCaptainNumber;
            newContent.id = i; // makes the id unique
            // points to div already created
            const newDiv = document.getElementById('teamCaptainsElements');
            newDiv.appendChild(newContent); // put created content inside div
            teamCaptainNumber++;
        }
        timesCreateTeamCaptainsPressed++;
        document.getElementById('createTeamCaptains').innerText = "Redo";
        timesCreateTeamCaptainsPressed = false;
        
    } else if (!timesCreateTeamCaptainsPressed)
    {
        var i;
        for(i = 0; i < document.getElementById('numGroups').value; i++)
        {
            let teamCaptain = document.getElementById(i)
            document.getElementById('teamCaptainsElements').removeChild(teamCaptain);
        }
        document.getElementById('createTeamCaptains').innerText = "Create Team Captains";
        timesCreateTeamCaptainsPressed = true;
    }
}



function teamCaptainFilled()
{
  
  for(var i = 0; i < document.getElementById('numGroups').value; i++)
  {
    if(document.getElementById(i).value == "")
    {
      return false;
    }
  }
  return true;
}


function createGroupButton()
{
  
    // go to new page when all inputs are filled out
    if(document.getElementById('numGroups').value > 0 && teamCaptainFilled() == true)
    {
      
      // creating global variables for team captain inputs
      // for(var i = 0; i < document.getElementById('numGroups').value; i++)
      // {
        
      //   var teamCaptainVariableName = "TeamCaptain " + (i + 1);
      //   const teamCaptainVariable = document.getElementById(i).value;
      //   localStorage.setItem("teamCaptainName" + i, teamCaptainVariable);
      //   console.log(teamCaptainVariableName);
      // }

      window.location.href= "addParticipants.html";
    }
    else 
    {
      alert("You must fill out all inputs.")
    }



  // stored trans-html variables
  const numberOfGroups = document.getElementById('numGroups').value;
  localStorage.setItem("NumGroups", numberOfGroups);
  
  const teamCaptain1 = document.getElementById(0).value;
  localStorage.setItem("captain1", teamCaptain1);

}



