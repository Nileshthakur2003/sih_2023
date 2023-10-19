var data;

fetch("csvjson.json").then((resp)=>resp.text()).then((response)=>{
  data=JSON.parse(response);
  
  var table=document.getElementById("table");
  
  for(var i=0;i<data.length;i++)
  {
  var tr=document.createElement("tr");
  tr.innerHTML="<td>"+data[i]['ID']+"</td><td>"+data[i]['Title']+"</td><td>"+data[i]['Technology Bucket']+"</td><td>"+data[i]['Category']+"</td><td>"+data[i]['Description']+"</td><td>"+data[i]['Problem Creater\'s Organization']+"</td>";
  table.appendChild(tr);
  
  };
});
  

