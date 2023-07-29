/**
 * @description 请添加组件描述
 * @author maicFir
 */
import React, { memo } from "react";
import style from "./index.module.scss";
interface Props {}

const Index: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div className={style["content-app"]}>
      <h2>公众号：扫码关注Web技术学苑</h2>
      <div>
        <img
          src="https://files.mdnice.com/user/24614/9c19c6f2-c419-4f2a-bd62-64b4bd128a5a.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default memo(Index);
