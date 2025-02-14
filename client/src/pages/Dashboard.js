import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styling/dashboardcss.css";
import { Line } from "react-chartjs-2";
import {useEffect} from 'react'; 

const Dashboard = () => {
  const { id, type } = useParams();
  const render = type === "admin";
  const drender = type === "distr" || type === "admin";
  const srender = type === "distr" || type === "admin" || type === "school";
  const distrender = type === "distr";
  const arender = type === "admin" || type === "faculty" || type === "student";
  const facrender = type === "admin" || type === "faculty";
  // useEffect(()=>{
  //   window.location.href = "http://localhost:1337/public/dashboard.html";

  // },[])
  return (
    <div className="page">
      <style></style>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink activeClassName="active">&emsp;Home&emsp;</NavLink>
          </li>
          {srender && (
            <li>
              <NavLink
                activeClassName="active"
                to={`http://localhost:1337/public/dashboard.html`}
              >
                &emsp;&emsp;Dashboard&emsp;&emsp;
              </NavLink>
            </li>
          )}

          {render && (
            <li className="dropdown">
              <NavLink activeClassName="active">
                &emsp;&emsp;District&emsp;&emsp;
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/districtregister/${type}/${id}`}
                  >
                    Add District Head
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/alldistrict/${type}/${id}`}
                  >
                    All District Heads
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {drender && (
            <li className="dropdown">
              <NavLink activeClassName="active">
                &emsp;&emsp;School&emsp;&emsp;
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/schoolregister/${type}/${id}`}
                  >
                    Add School Head
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/allschool/${type}/${id}`}
                  >
                    All School Heads
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {srender && (
            <li className="dropdown">
              <NavLink activeClassName="active">
                &emsp;&emsp;Faculty&emsp;&emsp;
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/facultyregister/${type}/${id}`}
                  >
                    Add Faculty
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/allfaculty/${type}/${id}`}
                  >
                    All Faculty
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {srender && (
            <li className="dropdown">
              <NavLink activeClassName="active">
                &emsp;&emsp;Student&emsp;&emsp;
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/studentregister/${type}/${id}`}
                  >
                    Add Student
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to={`/allStudent/${type}/${id}`}
                  >
                    All Student
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {facrender && (
            <li className="dropdown">
              <NavLink activeClassName="active" to={`/addvideo/${type}/${id}`}>
                &emsp;&emsp;Add Videos&emsp;&emsp;
              </NavLink>
            </li>
          )}

          {arender && (
            <li className="dropdown">
              <NavLink activeClassName="active" to={`/allvideo/${type}/${id}`}>
                &emsp;&emsp;All Videos&emsp;&emsp;
              </NavLink>
            </li>
          )}
          <NavLink className="logout" to="/homepage">
            Logout
          </NavLink>
        </ul>
      </nav>
      <div className="dash-baord">
        {/* <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [5, 6, 7],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        /> */}
        
      </div>
    </div>
  );
};

export default Dashboard;
