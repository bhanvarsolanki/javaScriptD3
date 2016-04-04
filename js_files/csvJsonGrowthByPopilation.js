var fs=require("fs");
var csv = fs.readFile("../csv_file/datafile.csv",function(err,data){
    if(err){
        console.log(err);
    }else{
       // console.log(typeof data);
        var lines = data.toString().split("\n");

        var growthByPopulation = [];

        var headerLine = lines[0].split(",");

            for (var i = 1; i < lines.length-1; i++) {
                    var obj = {};
                    var currentline = lines[i].split(",");
                    obj.Country_Name = currentline[0];
                    obj.Population_2010 = currentline[2];
                    obj.Population_2011 = currentline[3];
                    obj.Population_2012 = currentline[4];
                    obj.Population_2013 = currentline[5];
                    console.log(obj);

                growthByPopulation.push(obj);

            }
                fs.writeFile( "../js_files/growthByPopulation.json",JSON.stringify(growthByPopulation));

    }

});
