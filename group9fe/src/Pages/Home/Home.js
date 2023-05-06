import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { getClaims } from "../../Apis/Api";

import './Home.css'

export default function Home() {
    const [ allClaims, setClaims ] = useState([]);

    useEffect(() => {
    const fetchdata = async () => {
        const response = await fetch(
            'https://api.sampleapis.com/countries/countries');
            const data = await response.json();
            setClaims( data.slice( 0,3) )
    }
    fetchdata();
    }, []);

    const getColor = (status) => {
        if (status == "Rejected") return 'red';
        if (status == "Approved") return 'green';
        return '';
    };

    return (
        <div className='dashboard-container'>
            <h1>Dashboard</h1>
            <Table striped bordered hover className='table-style'>
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
                    allClaims.map( (claim,key) =>
                    <tr key={key}>
                        <td className='table-data'>{claim.name }</td>
                        <td className='table-data'>{claim.capital }</td>
                        <td className='table-data'><img width='20px' height='10px'
                                src={claim.media.flag} alt="flag" /></td>
                        <td className='status' style={{color: getColor("Approved")}}>Approved</td>
                        <td className='table-data'><Link to={{
                            pathname: '/home',
                            state: {employeeId: 100, claimId: 200, currencyId: 'MYR', projectId: 300}
                            }} >Details</Link></td>
                    </tr>
                    )
                }
            </tbody>
            </Table>
            <Button href="/home">Create new claim</Button> 
        </div>
    );
}