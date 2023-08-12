var edad = parseInt(prompt("¿Cuántos años tienes",0));
var companyia;

if(edad >= 15){
    document.write("<h3>"+"¡Enhorabuena! Puedes ver la película"+"</h3>");
    alert("¡Enhorabuena! Puedes ver la película");
}else{
    alert("¡Lo siento! NO puedes ver la película tú sól@.");
    companyia = confirm("¿Estás acompañado?");
    if(companyia === true){
        document.write("<h3>"+"¡Enhorabuena! Puedes ver la película"+"</h3>");
        document.write("<h3>"+"Eres menor pero traes acompañante!"+"</h3>");
        alert("¡Enhorabuena! Puedes ver la película");
    }else{
        alert("¡Lo siento! NO puedes ver la película tú sól@. Prueba a venir con acompañante.");
        document.write("<h3>"+"¡Eres menor y NO traes acompañante!"+"</h3>");
    }
}