import React from "react";

import styles from "./jobs.module.css";

const JobsCard = ({ job }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.jobtitle}>{job.jobTitle}</h3>
      <div className={styles.cnameAndDate}>
        <h5 className={styles.cname}>{job.companyName}</h5>
        <small>{job.postedDate}</small>
      </div>
      {/* <div className={styles.tags}>
            {job.skillsets.map(skill => <span>{skill}</span>)}
          </div> */}
      <p className={styles.details}>{job.shortDesc}</p>
      <a className={styles.applyBtn} href={job.OBJurl} target="_blank" rel="noreferrer">
        Easy Apply
      </a>
    </div>
  );
};

export default JobsCard;
