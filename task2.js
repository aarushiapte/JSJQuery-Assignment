var qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    }

var sortedTeam = [];

//pushing the values of the key value pair in the object into this array 
//and then sorting it in a descending order

for (var key in qTeams) {
        sortedTeam.push([key, qTeams[key]]); 
    }
	
	sortedTeam.sort(function(a, b)
	{
	  return b[1]-a[1]; 
	});
	
console.log(sortedTeam);