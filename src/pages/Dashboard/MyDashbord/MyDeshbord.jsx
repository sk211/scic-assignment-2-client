import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProductList from "../../Products/ProductList/ProductList";
import AddProducts from "../AddProduct/AddProducts";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyOrders from "../MyOrder/MyOrders";
import Payment from "../Payment/Payment";
import "./MyDashboard.css";
import BarChat from './../BarChat';
import MankeAdmin from './../MakeAdimn/MankeAdmin';
const MyDeshbord = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(` http://localhost:5000/chackadmin/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      });
  }, [user.email]);
  console.log(isAdmin);

  return (
    <div className="myDashboard container-fluid">
      <div className="row">
        <div
          className="col-lg-2 col-md-2 col-sm-1 col-1  pt-4 "
          id="dashboaard"
        >
          <h3 className="text-center">
            {" "}
            <i class="fas fa-home    "></i> Dashboard
          </h3>
          <ul>
            {isAdmin && (
              <div>
                <li>
                  <Link exact to={{ url }}>
                  </Link>
                </li>
                <li>
                  <Link exact to={`${url}/addProduct`}>
                    <i class="fas fa-address-card    "></i>
                    <span>Add Product</span>
                  </Link>
                </li>
                <li>
                  <Link exact to={`${url}/productlist`}>
                    <i class="fas fa-edit    "></i>
                    <span>Manage Products</span>
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/manageorder`}>
                    <i class="fab fa-expeditedssl    "></i>
                    <span> Manage All orders</span>
                  </Link>
                </li>
                <li>
                  <i class="fas fa-users    "></i>
                  <Link to={`${url}/makeadmin`}>Make Admin</Link>
                </li>

              </div>
            )}
            {!isAdmin && (
              <div>
                <li>

                  <Link to={`${url}/myorders`}>
                    <i class="fas fa-shopping-bag    "></i>
                    <span> My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/payment`}>
                    <i class="fas fa-money-bill    "></i>
                    <span> Payment</span>
                  </Link>
                </li>

              </div>
            )}

            <li className="d-flex ">
              {user?.email && (
                <li
                  onClick={logOut}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <i
                    class="fas fa-sign-out-alt   "
                    style={{
                      display: "dlex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "12px",
                    }}
                  ></i>
                  <span>Logout</span>
                </li>
              )}
            </li>
          </ul>
        </div>
        <div className="col-lg-10 col-sm-12 col-8 ">
          <div className="text-center">
            <Switch>

              <Route exact path={path}>
                <BarChat />
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProducts />
              </Route>

              <Route path={`${path}/myorders`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/productlist`}>
                <ProductList />
              </Route>
              <Route path={`${path}/manageorder`}>
                <ManageAllOrder />
              </Route>
              <Route path={`${path}/makeadmin`}>
                <MankeAdmin />
              </Route>

              <Route path={`${path}/payment`}>
                <Payment />
              </Route>


            </Switch>
            {/* <AddProducts />
            <MyOrders />
            <ManageAllOrder /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDeshbord;
