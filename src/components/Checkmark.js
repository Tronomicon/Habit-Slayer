import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkmark = ({isCompleted}) => {
  //console.log(isCompleted)
  if (isCompleted === true) {
    return (
        <Icon name="check" size={30} color="green" />
    );
  } else {
    return (
        <Icon name="circle" size={30} color="#900" />
    );
  }
};

export default Checkmark;
