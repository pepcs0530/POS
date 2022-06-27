import "./../components.css"
import "./Tableorder.css"

function Tableorder({ OrderTable }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">index</th>
                    <th scope="col">prod_barcode</th>
                    <th scope="col">prod_name</th>
                    <th scope="col">prod_price</th>
                    <th scope="col">count</th>
                </tr>
            </thead>
            <tbody>
                {OrderTable.map((val, index) => {
                    return (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{val.prod_barcode}</td>
                            <td>{val.prod_name}</td>
                            <td>{val.prod_price}</td>
                            <td>{val.count}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}
export default Tableorder