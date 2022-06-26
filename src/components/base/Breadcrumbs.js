import React from "react";
import { useNavigate } from "react-router-dom";

export default function BreadCrumb(props) {
  const { list } = props;
  const navigate = useNavigate();
  return (
    <div className="pt-2">
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {list &&
              list.length > 0 &&
              list.map((data, i) => (
                <>
                  {i === list.length - 1 ? (
                    <li
                      className="breadcrumb-item text-dark active fw-bold"
                      aria-current="page">
                      {data.label}
                    </li>
                  ) : (
                    <li className="breadcrumb-item">
                      <a
                        style={{ cursor: "pointer" }}
                        className="text-decoration-none"
                        onClick={() => {
                          navigate(data.link);
                        }}>
                        {data.label}
                      </a>
                    </li>
                  )}
                </>
              ))}
          </ol>
        </nav>
      </>
    </div>
  );
}
