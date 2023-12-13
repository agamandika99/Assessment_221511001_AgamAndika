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

const MatkulTables = () => {
    const [matkulData, setMatkul] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/matkul');
                setMatkul(response.data.data);
                console.log('matkul:', response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(matkulData);

    const handleEdit = (KodeMK) => {
        console.log('Edit KodeMK:', KodeMK);
    };

    const handleDetail = (KodeMK) => {
        console.log('Detail KodeMK:', KodeMK);
    };

    const handleDelete = async (KodeMK) => {
        try {

            const confirmDelete = window.confirm(`Apakah yakin menghapus data ${KodeMK}?`);

            if (!confirmDelete) {
                return; // If not confirmed, do nothing
            }
            // Make a DELETE request to the specified endpoint
            const response = await axios.delete(`http://localhost:3000/matkul/${KodeMK}`);

            // Check the response status to determine if the deletion was successful
            if (response.status === 200) {
                console.log(`Matkul with KodeMK ${KodeMK} deleted successfully`);

                // If deletion is successful, update the state to reflect the changes
                setMatkul((prevData) => prevData.filter((item) => item.KodeMK !== KodeMK));
            } else {
                console.error(`Error deleting Matkul with KodeMK ${KodeMK}`);
            }
        } catch (error) {
            console.error('Error deleting Matkul:', error);
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
                                        <CTableHeaderCell scope="col">KodeMK</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Nama Mata Kuliah</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {matkulData.map((item, index) => (
                                        <CTableRow key={index}>
                                            <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                            <CTableDataCell>{item.KodeMK}</CTableDataCell>
                                            <CTableDataCell>{item.NamaMK}</CTableDataCell>
                                            <CTableDataCell>
                                                <CButton color="info" onClick={() => handleDetail(item.KodeMK)}>
                                                    Detail
                                                </CButton>
                                                <CButton color="warning" onClick={() => handleEdit(item.KodeMK)}>
                                                    Edit
                                                </CButton>
                                                <CButton color="danger" onClick={() => handleDelete(item.KodeMK)}>
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

export default MatkulTables;
