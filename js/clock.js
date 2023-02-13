var myName=prompt("Adınızı Yazınız")
    console.log(myName)
    document.getElementById("myName").innerHTML = myName;
    
function time() {
    let date = new Date().toLocaleString('tr-TR');
        document.getElementById('myClock').innerHTML = date;
    }
    setInterval(time,1000)