import axios from "axios";
import moment from "moment";

const url = "http://localhost:5000/api/test/jobs";

const getDate = (postingDate) => {
  const date = postingDate.replace("T", " ");
  const someday = moment(date);
  return moment().diff(someday, "days");
};

export const fetchPopuplarJobs = async (query) => {
  console.log(url + "?title=" + query);

  try {
    const { data } = await axios.get(query ? url + "?title=" + query : url);
    // console.log(data);
    if (!data.jobs || data.jobs.length === 0)
      return [{ message: "no jobs found", found: false }];
    return {data, found: true};
  } catch (error) {
    console.log(error);
  }
};

export const fetchPastWeekJobs = (data) => {
  console.log(data);
  try {
    const recentData = {jobs: []};

      data.jobs.filter((job) => {
        const postingDate = getDate(job.OBJpostingDate);
        return postingDate <= 7  && recentData.jobs.push(job);
        
      });
      console.log(recentData);
    return {data: recentData, found: true};
  } catch (error) {
    console.log(error);
  }
};
