import React, { useState, useEffect, useRef } from 'react';
import { useRestActor } from '@bundly/ic-react';

const Desoname = () => {
    const bnd = useRestActor("backend");
  const [datoh, setDatoh] = useState('January');
  const [sensorData, setSensorData] = useState(null);
  const chartRef = useRef(null);


  useEffect(() => {
      
      
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        console.log("runnign")
        const response = await bnd.get('/get-data')
        setSensorData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };


  const handleMonthChange = (e) => {
    setDatoh(e.target.value);
  };


  return (
    <div className="container">
      <h1>ingresa el mes para obtener la info del Sensor que deseas obtener</h1>
      <label htmlFor="month">Seleccionar Mes para seleccionar los registros:</label>
      <select id="month"  onChange={handleMonthChange}>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>

      </select >

      

      <input type="week"></input>

    </div>
  );
};


export default Desoname;

