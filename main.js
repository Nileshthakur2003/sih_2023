var data;


var collected=["SIH1433","SIH1409","SIH1292","SIH1312","SIH1346","SIH1374","SIH1493","SIH1489","SIH1486","SIH1517","SIH1440","SIH1434","SIH1379","SIH1324","SIH1318","SIH1304","SIH1291","SIH1278"];

fetch("csvjson.json").then((resp)=>resp.text()).then((response)=>{
  data=JSON.parse(response);
  
  
  
  var table=document.getElementById("table");
  table.innerHTML+="<caption>FOUND_RECORDS : "+collected.length+"</caption>";
  for(var i=0;i<data.length;i++)
  {
  for(var t=0;t<collected.length;t++)
  {
    if(data[i]['ID']==collected[t])
    {
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>" + data[i]['ID'] + "</td><td>" + data[i]['Title'] + "</td><td>" + data[i]['Technology Bucket'] + "</td><td>" + data[i]['Category'] + "</td><td>" +
      data[i]['Description'] + "</td><td>" + data[i]['Problem Creater\'s Organization'] + "</td>";
        table.appendChild(tr);
    }
  }
  
  
  
  };
});
  

