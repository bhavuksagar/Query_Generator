function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("graph");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function returntex(){
    var ind=document.getElementById("index").value;
    var reg=document.getElementById("region").value;
    var stat=document.getElementById('status').value;
    var acc=document.getElementById("account").value;
    acc="acct_name=" +acc;
    var charr=document.getElementById("chart").value;
    var sou=document.getElementById('source').value;
    //var spa=document.getElementById('span').value;

    document.getElementById("out").innerHTML= ind + " " + sou + " " + reg + " " + stat+ " " + acc + " " + charr;
}