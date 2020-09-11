import React,{useState} from 'react';
import TablePart from './TablePart'; 
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function SimpleTable() {

  const [data,setdata]=useState(rows);
  const [q,setQ] = useState("");

  const search = (rowss) =>{
    return(
      rowss.filter(row=>row.name.toLowerCase().indexOf(q) > -1)


    );


  }
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value) }/> 


      </div>
      <div><TablePart data={search(data)} /></div>
    </div>
  );
}