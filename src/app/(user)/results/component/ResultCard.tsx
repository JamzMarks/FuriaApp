import { SiValorant } from "react-icons/si";
const ResultCard = () => {
    return(
        <article>
            <div>
                <SiValorant></SiValorant>
            </div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </article>
    )
}

export default ResultCard