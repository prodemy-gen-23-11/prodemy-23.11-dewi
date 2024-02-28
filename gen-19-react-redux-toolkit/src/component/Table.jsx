import React from 'react'

export default function Table({products, search, onClickDelete, onClickEdit

}) {
  return (
    <div>
      <table>
          <thead>
            <tr>
            <th className="th-style">
                <p className="text-style">ID</p>
              </th>
              <th className="th-style">
                <p className="text-style">Image</p>
              </th>
              <th className="th-style">
                <p className="text-style">Name</p>
              </th>
              <th className="th-style">
                <p className="text-style">Price</p>
              </th>{" "}
              <th className="th-style">
                <p className="text-style">Material</p>
              </th>
              <th className="th-style">
                <p className="text-style">Category_ID</p>
              </th>
              <th className="th-style">
                <p className="text-style"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.filter(produk=> produk.name.toLowerCase().includes(search)).sort((a,b)=> a.id > b.id ? 1 : -1)
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td className="td-style uppercase ">
                    <p className="text-style ">{item.id}</p>
                  </td>
                  <td className="td-style  ">
                    <img src={item.image} className="w-14" />
                  </td>
                  <td className="td-style uppercase ">
                    <p className="text-style ">{item.name}</p>
                  </td>
                  <td className="td-style">
                    <p className="text-style ">{item.price}</p>
                  </td>
                  <td className="td-style capitalize">
                    <p className="text-style">{item.material}</p>
                  </td>
                  <td className="td-style capitalize text-center">
                    <p className="text-style">{item.category_id}</p>
                  </td>
                  <td className="td-style" >
                    <div className="flex justify-center gap-4">
                    <button className="btn bg-green-400 hover:bg-green-500" onClick={() => onClickEdit(item.id)}>Edit</button>
                    <button className="btn bg-red-400 hover:bg-red-500"  onClick={() => onClickDelete(item.id)}>Delete</button>
                    </div>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}
