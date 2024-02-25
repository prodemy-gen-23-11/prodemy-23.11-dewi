const product = [
     {
       id: 1,
       name: "denim gray jacket",
       image:
         "https://sp.yimg.com/ib/th?id=OPHS.npgYpGLI0FzoXQ474C474&o=5&pid=21.1",
       price: "199.000 IDR",
     },
     {
       id: 2,
       name: "creme coat woman",
       image:
         "https://tse2.mm.bing.net/th?id=OIP.MLbq8KF_3p22-vHRLk0Q_QHaJ4&pid=Api&P=0&h=220",
       price: " 229.000 IDR",
     },
     {
       id: 3,
       name: "soft short jacket",
       image:
         "https://static.zara.net/photos///2024/V/0/1/p/3046/038/706/2/w/452/3046038706_2_3_1.jpg?ts=1706301161023",
       price: "149.000 IDR",
     },
     {
       id: 4,
       name: "oversize outer",
       image:
         "https://static.zara.net/photos///2024/V/0/1/p/4749/725/800/3/w/315/4749725800_1_1_1.jpg?ts=1706632284496",
       price: "179.000 IDR",
     },
   ];
   
   const dataBaru = {
     id: 5,
     name: "crop jacket",
     image:
       "https://i.etsystatic.com/45714168/r/il/1f0bbc/5169568402/il_794xN.5169568402_h6pe.jpg",
     price: "249.000 IDR",
   };
   console.log('data lama',product)
  
   //tambah data
   const produk2 =[...product]
   const tambahData = (data) => {
     produk2.push(data);
     console.log('data baru', produk2)
   };

  //hapus data
   let produk3 = [...produk2];
   function hapusData(id) {
   const index = produk3.findIndex(data => data.id === id)
       produk3.splice(index, 1)
       console.log('hapus data id', id, produk3);
      };  
   
   function updateData(id, name) {
     produk2.map((item) => {
       if (item.id === id) {
         item.name = name;
         console.log('update data',produk2);
       } 
       return produk2;
     });
   // let prod = produk2.find(prod => prod.id === id);
   // prod.name = name;
   // console.log('data update',produk2)
  }
tambahData(dataBaru);
hapusData(3);
updateData(1, 'denim jacket')

   