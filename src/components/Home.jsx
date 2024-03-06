import React, { useState } from "react";
import styles from "./Home.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartData from "./CartData";
import {addtoCart} from '../redux/features/cartSlice'
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const [cartData, setcartData] = useState(CartData);
  const dispatch =useDispatch();

  const handleSend=(e)=>{
    dispatch(addtoCart(e));
    toast.success('Item added in your Cart')
  }
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Ahmedabad Open now
        </h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">

          {

            CartData.map((element ,index)=>{

              return (
                <>
                 <Card
            style={{ width: "22rem", border: "none" }}
            className="hove mb-4"
          >
            <Card.Img variant="top" className="cd" src={element.imgdata} />

            <div className="card_body">
              <div className="upper_data d-flex justify-content-between align-items-center">
                <h4 className="mt-2">{element.dish}</h4>
                <span>{element.rating}</span>
              </div>

              <div className="lower_data d-flex justify-content-between ">
                <h5 className="mt-2">{element.address}</h5>
                <span>{element.price}</span>
              </div>

              <div className="extra"></div>

              <div className="last_data d-flex justify-content-between align-items-center">
                <Button
                onClick={()=>handleSend(element)}
                  style={{
                    marginLeft: "2cm",
                    width: "150px",
                    background: "#ff3054db",
                    border: "none",
                  }}
                  variant="outline-light"
                  className="mt-2 mb-2"
                >
                  Add TO Cart
                </Button>
              </div>
            </div>
          </Card>
                </>
              )
            })
          }
         
        </div>
      </section>
    </>
  );
};

export default Home;
