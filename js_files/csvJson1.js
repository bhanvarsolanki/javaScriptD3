var fs=require("fs");
var csv = fs.readFile("../csv_file/datafile.csv",function(err,data){
    if(err){
        console.log(err);
    }else{
       // console.log(typeof data);
        var lines = data.toString().split("\n");

        var population_Country = [];
        var gdp_Country = [];
        var purchasingPower_Country = [];

        var headerLine = lines[0].split(",");

            for (var i = 1; i < lines.length-1; i++) {
                    var obj1 = {};
                    var obj2 = {};
                    var obj3 = {};
                    var currentline = lines[i].split(",");
                    obj1.Country_Name = currentline[0];
                    obj2.Country_Name = currentline[0];
                    obj3.Country_Name = currentline[0];

                    obj1.Population_2013 = parseFloat(currentline[5].replace("'",""));
                    console.log(obj1);

                    obj2.gdp_2013 = parseFloat(currentline[9].replace("'",""));
                    console.log(obj2);

                    obj3.puchase_2013 = parseFloat(currentline[17].replace("'",""));
                    console.log(obj3);

                population_Country.push(obj1);
                gdp_Country.push(obj2);
                purchasingPower_Country.push(obj3);

            }
                fs.writeFile( "../js_files/gdp_Country.json",JSON.stringify(gdp_Country));
                fs.writeFile( "../js_files/population_Country.json",JSON.stringify(population_Country));
                fs.writeFile( "../js_files/purchasingPower_Country.json",JSON.stringify(purchasingPower_Country));

    }

});
