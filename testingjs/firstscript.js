function sayHello() {
    let name = document.getElementById("name").value;
    let message = "<h2>hello " + name + "!</h2>";

    document.getElementById("content").innerHTML = message;
}

//TODO add complex number functionality
//TODO check for negatives in matrices
function getEvs() {
    let srtVals = document.getElementById("values").value;
    const intVals = [];
    for (var i = 0; i < srtVals.length; i++){
        intVals[i] = parseInt(srtVals.charAt(i));
        console.log(intVals[i]);
    }

    let gamma = (-1)*intVals[0] - intVals[3];
    let psi = intVals[0]*intVals[3] - intVals[1]*intVals[2];

    let lambda1 = (-1*gamma + Math.sqrt(gamma*gamma - 4*psi)) / 2;
    let lambda2 = (-1*gamma - Math.sqrt(gamma*gamma - 4*psi)) / 2;

    //TODO check for zero values in the cooeficient matrix
    let vec1 = (-1)*(intVals[0] - lambda1) / intVals[1];
    let vec2 = (-1)*(intVals[0] - lambda2) / intVals[1];

    if (isNaN(vec1)){
        console.log("0 detected")
        vec1 = ((-1)*intVals[2] - lambda1) / intVals[3];
    }
    if (isNaN(vec2)){
        console.log("0 detected")
        vec2 = ((-1)*intVals[2] - lambda2) / intVals[3];
    }

    document.getElementById("ev").textContent = "Your eigenvalues are: " + lambda1 + " and " + lambda2
        + ". Your eigenvectors are [1, " + vec1 + "] and [1, " + vec2 + "]";
}
