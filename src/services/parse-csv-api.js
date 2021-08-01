const CSVToJSON = require("csvtojson");


CSVToJSON().fromFile("./relatorio_cadop.csv").then(source => {
console.log(source);
 
});