import React from "react";
import Slider from 'react-slick';
import {Button} from '@material-ui/core'

import styles from "./jobs.module.css";
import JobsCard from "./JobsCard";
import { fetchPastWeekJobs } from "../api";


const JobsContainer = ({data, setData}) => {
  console.log(data);
  const jobs = data.jobs.filter((job, index) => index < 10 && job);
  const handleClick =  () => {
    
    setData(fetchPastWeekJobs(data));
  } 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className={styles.JobsContainer}>
      <div>
        <h4>Popular Jobs</h4>
        <Button variant="contained" onClick={handleClick}>
          Get thie weeks jobs
        </Button>
      </div>
      <div className={styles.cardsContainer}>
        <Slider {...settings}>
          {jobs.map((job, index) =>   <JobsCard key={index +"_0"+index} job={job} />)}
        </Slider>
      </div>
    </div>
  );
};

export default JobsContainer;
