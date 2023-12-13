import React, { useState, useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CButton,
} from '@coreui/react';
import axios from 'axios';
import { DocsExample } from 'src/components';

const DosenTables = () => {
    const [dosenData, setDosen] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/dosen');
                setDosen(response.data.data);
                console.log('dosen:', response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(dosenData);

    const handleEdit = (NIP) => {
        console.log('Edit NIP:', NIP);
    };

    const handleDetail = (NIP) => {
        console.log('Detail NIP:', NIP);
    };

    const handleDelete = async (NIP) => {
        try {
            // Make a DELETE request to the specified endpoint
            const response = await axios.delete(`http://localhost:3000/dosen/${NIP}`);

            // Check the response status to determine if the deletion was successful
            if (response.status === 200) {
                console.log(`Dosen with NIP ${NIP} deleted successfully`);

                // If deletion is successful, update the state to reflect the changes
                setDosen((prevData) => prevData.filter((item) => item.NIP !== NIP));
            } else {
                console.error(`Error deleting Dosen with NIP ${NIP}`);
            }
        } catch (error) {
            console.error('Error deleting Dosen:', error);
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardBody>
                        <DocsExample href="components/table#small-tables">
                            <CTable>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">No</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">NIP</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Nama Dosen</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">HP</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {dosenData.map((item, index) => (
                                        <CTableRow key={index}>
                                            <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                            <CTableDataCell>{item.NIP}</CTableDataCell>
                                            <CTableDataCell>{item.NamaDosen}</CTableDataCell>
                                            <CTableDataCell>{item.HP}</CTableDataCell>
                                            <CTableDataCell>
                                                <CButton color="info" onClick={() => handleDetail(item.NIP)}>
                                                    Detail
                                                </CButton>
                                                <CButton color="warning" onClick={() => handleEdit(item.NIP)}>
                                                    Edit
                                                </CButton>
                                                <CButton color="danger" onClick={() => handleDelete(item.NIP)}>
                                                    Delete
                                                </CButton>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default DosenTables;

