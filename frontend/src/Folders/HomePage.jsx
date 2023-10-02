import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
         <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to out simple pos for smoll bussness</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa dignissimos illo reprehenderit praesentium ducimus, pariatur suscipit commodi debitis, enim quis, accusamus unde repudiandae nulla aperiam impedit quae quas id!</p>
        <p>if you have any issue, call 772897342</p>
        <Link to='/pos' className="btn btn-primary">click here to bye products</Link>
       </div>
    </MainLayout>
  );
}

export default HomePage;
