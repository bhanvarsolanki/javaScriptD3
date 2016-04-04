var fs=require("fs");
var csv = fs.readFile("../csv_file/datafile.csv",function(err,data){
    if(err){
        console.log(err);
    }else{
       // console.log(typeof data);
        var lines = data.toString().split("\n");

        var growthByPurchaase = [];

        var headerLine = lines[0].split(",");

            for (var i = 1; i < lines.length-1; i++) {
                    var obj = {};
                    var currentline = lines[i].split(",");
                    obj.Country_Name = currentline[0];
                    obj.Purchase_2010 = currentline[14];
                    obj.Purchase_2011 = currentline[15];
                    obj.Purchase_2012 = currentline[16];
                    obj.Purchase_2013 = currentline[17].replace("\r","");
                    console.log(obj);

                growthByPurchase.push(obj);

            }
                fs.writeFile( "../js_files/growthByPurchasingPower.json",JSON.stringify(growthByPurchase));

    }

});
