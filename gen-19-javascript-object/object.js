var teman = {
    nama   : "Udin",
    usia   : 16,
//     sapa   : function(){
//        return 'Ini ${nama}, usianya ${usia}';
//     }
}
// console.log(data.sapa());

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function updateData(){
    rl.question('Nama Baru: ', (nama) => {
        teman.nama = nama;
        rl.question('Usia Berapa: ', (usia) =>{
            teman.usia = usia;
            console.log(teman);
        });  
    })
}
updateData();