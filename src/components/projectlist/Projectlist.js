import React from 'react'
import "./Projectlist.css"
import Project from "../projects/Project"
import { products } from '../../data' 
const Projectlist = () => {
    return (
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Projects</h1>
          <p className="pl-desc">
           Here are some of my few projects that I have done. And I will continue to grow this list.
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Project key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    );
}

export default Projectlist;
