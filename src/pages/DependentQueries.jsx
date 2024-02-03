import axios from "axios";
import { useQuery } from "react-query";

const fetchUsrByEmail = async (email) => {
  return await axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCoursesByChannelId = async (channelId) => {
  return await axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueries = ({ email }) => {
  const { data: user, error: userError } = useQuery(["users", email], () =>
    fetchUsrByEmail(email)
  );

  const channelId = user?.data?.channelId;

  const { data: courses, error: coursesError } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );
  console.log({ courses });
  if (userError) {
    console.error("Error fetching user:", userError);
  }

  if (coursesError) {
    console.error("Error fetching courses:", coursesError);
  }

  return (
    <div>
      {courses && courses.data.courses.map((course) => {
        return <div key={course}>{course}</div>;
      })}

      <h1>olamide</h1>
    </div>
  );
};
