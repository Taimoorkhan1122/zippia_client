import Search from "./Search";
import React, { useState } from "react";
import JobsContainer from "./JobsContainer";

import styles from "./homepage.module.css";

const Homepage = ({data, setData}) => {
  const [jobs, setJobs] = useState(data);
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Get the job you really want</h1>
        <p>Discover your options with your personalized career search</p>
      </div>
      <Search setData={setJobs} />
      {console.log("hererer =-> ", jobs)}
      {!jobs.found ? (
        <div className={styles.notFound}>{jobs[0].message}</div>
      ) : (
        <JobsContainer data={jobs.data} setData={setJobs} />
      )}
    </div>
  );
};

export default Homepage;
