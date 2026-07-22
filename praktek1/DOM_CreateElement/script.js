console.log("test");
// tambah list setiap pencet
function tambahUl(){
    var buatList = document.createElement("li");
    var isiText = document.createTextNode("contoh ul");
    buatList.appendChild(isiText);
    document.getElementById("unorderedList").appendChild(buatList);
}
// bikin tangga setiap pencet
var i = 0;
function tanggaList(){
    var buatUnorderedList = document.createElement("ol");
    buatUnorderedList.appendChild(document.createTextNode("Tangga"))
    document.getElementsByTagName("ol")[i].appendChild(buatUnorderedList);
    i++;
}

