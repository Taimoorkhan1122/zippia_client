import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

import Header from './components/Header';
import Homepage from './components/Homepage';
import "./index.css";
import { fetchPopuplarJobs } from './api';


function App() {
  const [jobs, setJobs] = useState([]);

  // getting data from rest API and updating the state
  useEffect(() => {
    const getData = async () => {
      setJobs(await fetchPopuplarJobs())
    };
    getData();
  }, [])

  if(!jobs || jobs.length === 0) return <GridLoader color="#0e0702" size={25} />;
  return (
    <div className="container">
      <Header />
      {/* passing data to child components */}
      <Homepage data={jobs} setData={setJobs} />
    </div>
  );
}

export default App;
