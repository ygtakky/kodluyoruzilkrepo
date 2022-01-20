import axios from "axios";

const getData = async (userID) => {
  try {
    const {data: user} = await axios.get("https://jsonplaceholder.typicode.com/users/" + userID);
    const {data: posts} = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userID);

    user.posts = [{ ...posts }];
    return user;
  } catch(error) {
    console.log(error);
    return 1;
  }
}

export default getData;