import React,{useState, useEffect} from 'react'
import {getAllcategories} from './API';

export default function Testing() {

  const [categories,setcategories] = useState();

  const preload = () => {
    getAllcategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setcategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div>
      <h1>testing file</h1>

      <ul>

         {
           categories &&
              categories.map((category, index) => {
                            return (<li>{category.name}</li>
                            );
          })}

      </ul>

      <table className="table table-bordered">
                             <thead>
                                 <th>Sr No</th>
                                 <th>Cateogry Name</th>
                             </thead>

                             <tbody>
                             {
                               categories &&
                                categories.map((category, index) => {
                                return (<tr>
                                <td>{index+1}</td>
                                <td>{category.name}</td>
                                </tr>
                            );
                             })}

                             </tbody>  
        </table>

    </div>
  )
}