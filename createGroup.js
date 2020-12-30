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
            // // points to div already created
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

function createGroup()
{
    // go to new page when all inputs are filled out
    // if(document.getElementById('numGroups').value > 0)
    // {
    //     document.getElementById('createGroup').onclick = function()
    //     {
    //         location.href= 'addParticipants.html';
    //     }
    // }

  // will store value of groups
  const numberOfGroups = document.getElementById('numGroups').value;

  // to set into local storage
  localStorage.setItem("NumGroups", numberOfGroups);

  return;
}



