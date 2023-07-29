/**
 * @description popup
 * @author maicFir
 */
import React, { useState, memo } from "react";
import style from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("hello,this is popup");
  const handleOpenSet = () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("set.html"),
    });
  };
  return (
    <div className={style["popup-app"]}>
      <p>{title}</p>
      <p onClick={handleOpenSet}>open set.html</p>
    </div>
  );
};

export default memo(Index);
