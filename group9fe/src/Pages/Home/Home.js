import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Home() {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
    const fetchata = async () => {

        const response = await fetch(
            'https://api.sampleapis.com/countries/countries');
            const data = await response.json();
            setCountries( data.slice( 0,3) )
        
    }

    // Call the function
    fetchata();
    }, []);

    return (
    <>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Claim Id</th>
            <th>Project Id</th>
            <th>Currency</th>
            <th>Status of Claim</th>
            </tr>
        </thead>
        <tbody>
            {
                countries.map( (country,key) =>
                <tr key={key}>
                    <td className='table-data'>{country.name }</td>
                    <td className='table-data'>{country.capital }</td>
                    <td className='table-data'><img width='20px' height='10px'
                            src={country.media.flag} alt="flag" /></td>
                    <td className='table-data'>approved</td>
                </tr>
                )
            }
        </tbody>
        </Table>
        
        
        <Button href="/home">Create new claim</Button> 
    </>
    
    );
}