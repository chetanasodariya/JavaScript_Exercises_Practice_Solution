function file(){
    let extension = document.getElementById("file").value;

    let a = extension.split(".");

    console.log(extension);
    console.log(typeof extension);
    console.log(a);
    console.log(a[a.length-1]);

    document.getElementById("fileExtension").innerHTML = a[a.length-1];
}