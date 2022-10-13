import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      Fullname : {props.name} <br></br>
      Bio : {props.bio} <br></br>
      Profession : {props.pro} <br></br>
      {props.children}
      <button onClick={props.hundelalert}>click</button>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  pro: PropTypes.string,
};

Profile.defaultProps = {
  name: "canne",
  bio: "nothing to note",
  pro: "freelancer",
};
