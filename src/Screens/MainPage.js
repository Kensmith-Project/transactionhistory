import React from "react";
import { useState, useEffect } from "react";
import successlogo from "../assets/successfullogo.webp";
import failedlogo from "../assets/failedlogo.png";

/*
====== 
Query graphl data schema
======
*/

const LAUNCHES_QUERY = `
query AllPosts{
  posts{
  
    id
    date
    transactions{
      id
      name
    status
    Type
      currency
      Amount
      
    }
   
  }
}
`;

/*
=====
faked schema
./schema.faker.graphql
=====
*/

function MainPage() {
  const [launches, setlaunches] = useState([]);

  /*
====== 
Fetch data from the graphql faked Api
======
*/
  useEffect(() => {
    fetch("http://localhost:9002/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setlaunches(data.data.posts));
  }, []);

  /*
====== 
A state that updates search and filter
======
*/
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <main>
      <section className="section">
        <div className="top-title">
          <h1>Transaction History</h1>
        </div>

        <div className="board">
          <input
            type={"search"}
            className="search"
            placeholder="Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          <div className="filter-section">
            <button
              className="all-btn"
              type={"button"}
              title="All"
              onClick={() => setSearchTitle("")}
            >
              All
            </button>
            <button
              className="s-btn"
              placeholder="Successful"
              title="Successful"
              onClick={() => setSearchTitle("successful")}
            >
              Successful
            </button>
            <button
              className="debit-btn"
              placeholder="Debit"
              onClick={() => setSearchTitle("debit")}
            >
              Debit
            </button>
            <button
              className="c-btn"
              placeholder="Credit"
              onClick={() => setSearchTitle("credit")}
            >
              Credit
            </button>
            <button
              className="f-btn"
              placeholder="Failed"
              onClick={() => setSearchTitle("failed")}
            >
              Failed
            </button>
          </div>
          <main className="transaction-detail-section">
            {launches.map((item, idx) => {
              if (
                item.date
                  .toLocaleLowerCase()
                  .includes(searchTitle.toLocaleLowerCase())
              ) {
                return (
                  <div className="daily-transact" key={item.id}>
                    <h3 className="date">{item.date}</h3>
                    {item.transactions.map((item) => {
                      const { id, name, status, Type, currency, Amount } = item;
                      return (
                        <div className="data-body" key={id}>
                          <div className="side-box">
                            <img
                              src={
                                status === "Successful"
                                  ? successlogo
                                  : status === "Failed"
                                  ? failedlogo
                                  : successlogo
                              }
                              className="status"
                            />
                          </div>
                          <div className="data-box">
                            <p className="name"> {name}</p>
                            <p>{Type}</p>
                            <p className="type">{status}</p>
                            <p>
                              {currency} <span>{Amount}</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }

              const Arr = item.transactions
                .filter((value, index) => {
                  if (searchTitle.trim() == "") {
                    return value;
                  } else if (
                    value.name
                      .toLowerCase()
                      .includes(searchTitle.toLocaleLowerCase()) ||
                    value.status
                      .toLowerCase()
                      .includes(searchTitle.toLocaleLowerCase()) ||
                    value.Type.toLowerCase().includes(
                      searchTitle.toLocaleLowerCase()
                    )
                  ) {
                    return value;
                  }
                })
                .map((item) => {
                  const { id, name, status, Type, currency, Amount } = item;
                  return (
                    <div className="data-body" key={id}>
                      <div className="side-box">
                        <img
                          src={
                            status === "Successful"
                              ? successlogo
                              : status === "Failed"
                              ? failedlogo
                              : successlogo
                          }
                          className="status"
                        />
                      </div>
                      <div className="data-box">
                        <p className="name"> {name}</p>
                        <p>{Type}</p>
                        <p className="type">{status}</p>
                        <p>
                          {currency} <span>{Amount}</span>
                        </p>
                      </div>
                    </div>
                  );
                });

              if (Arr.length > 0) {
                return (
                  <div className="daily-transact" key={item.id}>
                    <h3 className="date">{item.date}</h3>
                    {Arr}
                  </div>
                );
              }
              return;
            })}
          </main>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
