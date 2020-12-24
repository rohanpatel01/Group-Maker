let timesCreateTeamCaptainsPressed = 0;

function createTeamCaptains() {

    if(timesCreateTeamCaptainsPressed % 2 == 0)
    {
        var i;
        var teamCaptainNumber = 1;
        for (i = 0; i < document.getElementById('numGroups').value; i++) 
        {
            // create element
            const newContent = document.createElement("input");
            newContent.placeholder = "Team Captain " + teamCaptainNumber ;
            newContent.id = i; // makes the id unique
            // // points to div already created
            const newDiv = document.getElementById('teamCaptainsElements');
            newDiv.appendChild(newContent); // put created content inside div
            teamCaptainNumber++;
        }
        timesCreateTeamCaptainsPressed++;
        document.getElementById('createTeamCaptains').innerText = "Redo";
        
    } else 
    {
        // trying to remove the team captain elements that were made by the button.
        // after the button is pressed once I want it to change to "Edit Number of Team Captains"
        // if pressed edit team captains, delete all previous team captains and 
        // alert that they should enter a new number of team captains
        
        
        var i;
        for(i = 0; i < document.getElementById('numGroups').value; i++)
        {
            let teamCaptain = document.getElementById(i)
            document.getElementById('teamCaptainsElements').removeChild(teamCaptain);
        }
    }
    

}