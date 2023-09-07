import React, { useEffect, useState } from "react";
import "../Css/MyBalance.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import axios from "axios";
const MyBalance = () => {
  const [totCoin, setTotCoin] = useState([]);
  const displayDetail = [];

  useEffect(() => {
    axios
      .get("http://localhost:2000/my-object")
      .then((response) => {
        setTotCoin(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //const paymentTable=totCoin?.map((data,index) =>{})
  //console.log( "vvv",totCoin[0].payment[0].coin)
  const [givenEmail, setGivenEmail] = useState("");
  useEffect(() => {
    setGivenEmail(localStorage.getItem("E-mail"));
  
  }, []);

  totCoin.map((user) => {
    // console.log(user.email);
    if (user.email == givenEmail) {
      displayDetail.push(user);
    
    }
  });
  const coinBalance = [];
  displayDetail?.map((li) => {
    coinBalance.push({
      id: li._id,
      coin: li.payment.coin,
      type: li.payment.type,
      amount: li.payment.amount,
      actualAmount: li.payment.actualAmount,
      flag: 1,
    });
  });
  const displayList = displayDetail?.map((list) => {
    console.log(list);
    return (
      <tr>
        <td>{list.payment.coin}</td>
        <td>{list.payment.type}</td>
        <td>{list.payment.amount}</td>
        <td>{list.payment.actualAmount} rs</td>
      </tr>
    );
  });

  const balancerow=coinBalance?.map((listItem) => {
    let totalbalance=0;
    let totalcoin=0;
    if (listItem.flag !== 0) {
      if(listItem.type==="sell"){
       totalbalance=-listItem.actualAmount;
       totalcoin=-Number(listItem.amount);
       console.log("y",totalcoin)
      }
      else{
      totalbalance=listItem.actualAmount;
       totalcoin=Number(listItem.amount);
       console.log("z",totalcoin)
      }
      coinBalance.map((li) => {
        if (listItem.coin === li.coin && listItem.id !== li.id) {
        console.log(listItem.id,li.id,"kk")
          li.flag = 0;
          if(li.type==="sell"){
            totalbalance-=li.actualAmount;
            totalcoin=totalcoin-Number(li.amount);
            console.log("a",Number(listItem.amount))
          }
          else{
            totalbalance+=li.actualAmount;
            totalcoin+=Number(li.amount);
            console.log("b",totalcoin)
          }
        }
      });
      console.log(listItem);
      return (
        <tr>
          <td>{listItem.coin}</td>
          <td>{totalbalance} rs</td>
          <td>{totalcoin}</td>
        </tr>
      );
    }
    
  });

  return (
    <>
      <UserNavbar />
      <div className="My-outer">
        <div className="container-fluid My-inner">
          <div className="row text-center justify-content-around">
            <h1>Your Assets</h1>
            <div className="col col-md-5 My-table">
              <table class="table my-tab">
                <thead>
                  <tr>
                    <th scope="col">Coin Name</th>
                    <th scope="col">Total Balance</th>
                    <th scope="col">Total Coin</th>
                  </tr>
                </thead>
                <tbody>
                  {/* totCoin.map((obj)=> {
      obj.payment.map((o)=>{
        <TableRow 
        coin={o.coin}
        ></TableRow>

      })
     
    }) */}
    {balancerow}
                  {/* <tr>
      
      <td>{totCoin[0].payment[0].coin}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
                </tbody>
              </table>
            </div>
            <h1>Recent Activity</h1>
            <div className="col col-md-5 My-table my-5">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Coin</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Coin Amount</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>{displayList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyBalance;
