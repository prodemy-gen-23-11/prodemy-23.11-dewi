document.getElementById("luas_persegi").innerHTML="Luas Persegi"
function luas_persegi(s){
    var s = document.getElementById("sisi").value ;
    const L_persegi = parseInt(s) * parseInt(s);
    alert(L_persegi);
}

document.getElementById("luas_persegi_panjang").innerHTML="Luas Persegi Panjang"
function luas_persegi_panjang(p,l){
    var p = document.getElementById("panjang").value ;
    var l = document.getElementById("lebar").value ;
    const L_persegi_panjang = parseInt(p) * parseInt(l);
    alert(L_persegi_panjang);
}

document.getElementById("luas_segitiga").innerHTML="Luas Segitiga"; 
function luas_segitiga(a,t){
    var a = document.getElementById("alas").value ;
    var t = document.getElementById("tinggi").value ;
    const L_segitiga = 1/2 * parseInt(a) * parseInt(t);
    alert(L_segitiga.toFixed(2));
}

document.getElementById("luas_lingkaran").innerHTML="Luas Lingkaran"; 
function luas_lingkaran(r){
    var r = document.getElementById("jari_jari").value ;
    const L_lingkaran = Math.PI * parseInt(r) * parseInt(r);
    alert(L_lingkaran.toFixed(2));
}

document.getElementById("luas_trapesium").innerHTML="Luas Trapesium"; 
function luas_trapesium(a,b,h){
    var a = document.getElementById("sisi_a").value ;
    var b = document.getElementById("sisi_b").value ;
    var h = document.getElementById("tinggi_1").value ; 
    const L_trapesium = 1/2 * (parseInt(a) + parseInt(b)) * parseInt(h);
    alert(L_trapesium.toFixed(2));
   
}
