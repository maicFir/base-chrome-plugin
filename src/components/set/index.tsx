/**
 * @description 设置页面
 * @author maicFir
 */
import React, { useState } from "react";
import style from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;
  const [tagData, setTagData] = useState([
    {
      name: "tag1",
      value: "tag1",
    },
    {
      name: "tag2",
      value: "tag2",
    },
    {
      name: "tag3",
      value: "tag3",
    },
  ]);
  return (
    <div className={style["set-app"]}>
      <h1>tag</h1>
      <div className="tag-wrap">
        {tagData.map((v) => (
          <span className={v.name} key={v.name}>
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Index;
