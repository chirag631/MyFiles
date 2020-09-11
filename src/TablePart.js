import React from 'react';


const TablePart = ({data}) => {
   const columns = data[0] && Object.keys(data[0]);
   
    return(

        <table cellPadding='4' cellSpacing='10'>
            <thead >

                <tr>{data[0] && columns.map(heading => 
                     <th align='left'>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(row => <tr>

                    {columns.map(column =><td>{row[column]}</td>)}




                </tr>)}
                
            </tbody>





        </table>





    );


}

export default TablePart;