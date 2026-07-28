function calcular() {
    let textoA = document.getElementById("numA").value;
    let textoB = document.getElementById("numB").value;
    let textoC = document.getElementById("numC").value;
    let pantalla = document.getElementById("resultado");

    if (textoA == "" || textoB == "" || textoC == "") {
        pantalla.innerHTML = "Debe completar todos los campos.";
        return;
    }

    let a = parseFloat(textoA);
    let b = parseFloat(textoB);
    let c = parseFloat(textoC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        pantalla.innerHTML = "Solo se permiten números.";
        return;
    }

    if (a == 0) {
        pantalla.innerHTML = "El coeficiente A no puede ser cero.";
        return;
    }

    let discriminante = (b * b) - (4 * a * c);

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        pantalla.innerHTML = "Las raíces son reales y distintas: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    } 
    else if (discriminante == 0) {
        let x = -b / (2 * a);
        pantalla.innerHTML = "La solución es única: x = " + x.toFixed(2);
    } 
    else {
        pantalla.innerHTML = "La ecuación posee dos soluciones complejas.";
    }
}