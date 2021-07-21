import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

import Header from './components/Header';
import Homepage from './components/Homepage';
import "./index.css";
import { fetchPopuplarJobs } from './api';


function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setJobs(await fetchPopuplarJobs())
    };
    getData();
  }, [])
  console.log(jobs);

  if(!jobs || jobs.length === 0) return <GridLoader color="#0e0702" size={25} />;
  return (

    <div className="container">
      <Header />
      <Homepage data={jobs} setData={setJobs} />
    </div>
  );
}

export default App;
