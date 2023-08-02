import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1785779/pexels-photo-1785779.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Shirts
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/8485730/pexels-photo-8485730.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              WomenWear
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Coats
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2307303/pexels-photo-2307303.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Dresses
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Casuals
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories
