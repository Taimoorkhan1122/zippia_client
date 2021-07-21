import axios from "axios";
import moment from "moment";

// REST api base url deployed on heroku
const url = "https://zippia-server.herokuapp.com/api/test/jobs";

// This function will take posting date as argument and returns the difference between the posting and current date
const getDate = (postingDate) => {
  const date = postingDate.replace("T", " ");
  const someday = moment(date);
  return moment().diff(someday, "days");
};

// Fetching defualt {business analyst} jobs
export const fetchPopuplarJobs = async (query) => {
  try {
    const { data } = await axios.get(query ? url + "?title=" + query : url);
    if (!data.jobs || data.jobs.length === 0)
      return [{ message: "no jobs found", found: false }];
    return { data, found: true };
  } catch (error) {
    console.log(error);
  }
};

// this function will take data object as argument and return jobs that were posted within past 7 days;
export const fetchPastWeekJobs = (data) => {
  console.log(data);
  try {
    const recentData = { jobs: [] };

    data.jobs.filter((job) => {
      const postingDate = getDate(job.OBJpostingDate);
      return postingDate <= 7 && recentData.jobs.push(job);
    });

    return { data: recentData, found: true };
  } catch (error) {
    console.log(error);
  }
};
