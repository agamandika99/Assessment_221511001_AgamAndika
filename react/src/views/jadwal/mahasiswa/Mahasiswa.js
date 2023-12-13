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

const Tables = () => {
  const [mahasiswaData, setMahasiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/mahasiswa');
        setMahasiswa(response.data.data);
        console.log('mahasiswa:', response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(mahasiswaData);

  const handleEdit = (NIM) => {
    console.log('Edit NIM:', NIM);
  };

  const handleDetail = (NIM) => {
    console.log('Detail NIM:', NIM);
  };

  const handleDelete = async (NIM) => {
    try {
      const confirmDelete = window.confirm(`Apakah yakin menghapus data ${NIM}?`);

      if (!confirmDelete) {
        return; 
      }

      const response = await axios.delete(`http://localhost:3000/mahasiswa/${NIM}`);
      
      if (response.status === 200) {
        console.log(`Mahasiswa with NIM ${NIM} deleted successfully`);
        
        setMahasiswa((prevData) => prevData.filter((item) => item.NIM !== NIM));
      } else {
        console.error(`Error deleting Mahasiswa with NIM ${NIM}`);
      }
    } catch (error) {
      console.error('Error deleting Mahasiswa:', error);
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
                    <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama Mahasiswa</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Prodi</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jurusan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {mahasiswaData.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.NIM}</CTableDataCell>
                      <CTableDataCell>{item.NamaMhs}</CTableDataCell>
                      <CTableDataCell>{item.Prodi}</CTableDataCell>
                      <CTableDataCell>{item.Jurusan}</CTableDataCell>
                      <CTableDataCell>{item.Alamat}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="info" onClick={() => handleDetail(item.NIM)}>
                          Detail
                        </CButton>
                        <CButton color="warning" onClick={() => handleEdit(item.NIM)}>
                          Edit
                        </CButton>
                        <CButton color="danger" onClick={() => handleDelete(item.NIM)}>
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

export default Tables;
