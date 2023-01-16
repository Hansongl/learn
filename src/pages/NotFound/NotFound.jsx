import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      页面不存在~
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        返回首页
      </button>
    </div>
  );
}

export default NotFound;
