import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}


const Like = ({ onClick }:Props)=> {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
}

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
    );
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
