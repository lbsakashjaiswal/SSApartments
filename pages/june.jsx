import React from "react";
import Head from "next/head";
import Link from "next/link";
const june = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        />
        <title>Our Building</title>
        <link rel="icon" href="/Logo.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
      </Head>
      <div>
        <nav className="navbar bg-primary navbar-dark fixed-top">
          <a className="navbar-brand" href="#">
            Shree Shyam Apartments
          </a>
          <ul className="navbar-nav">
            <li className="nav-items">
              <a href="#" className="nav-link mr-1" id="balance">
                Balance -360
              </a>
            </li>
          </ul>
        </nav>

        <div className="container mt-4 ">
          <h3 className="text-center aagepicche">
            All Details Of Your Building Present On This Page
          </h3>
          <br />
          <h2>
            <u>June</u>
          </h2>
          <br />
          <div className="row ">
            <table className="col-11 col-md-7">
              <tr>
                <th className="text-center">Plot No 19 (3rd Floor)</th>
                <th className="text-center">Plot No 20 (3rd Floor)</th>
              </tr>
              <tr>
                <td className="done">Rohit Gupta Ji (500/-)</td>
                <td className="done">Nand Kishor Ji (500/-)</td>
              </tr>
              <tr>
                <td className="done">Prabhu Dayal Ji (500/-)</td>
                <td className="done">Randhir Singh Ji (500/-)</td>
              </tr>
              <tr>
                <th className="text-center">Plot No 19 (2nd Floor)</th>
                <th className="text-center">Plot No 20 (2nd Floor)</th>
              </tr>
              <tr>
                <td className="done">Anoop Ji (500/-)</td>
                <td className="done">Madhu Ji (500/-)</td>
              </tr>
              <tr>
                <td className="done">Akash Jaiswal Ji (500/-)</td>
                <td className="done">Mukesh Jha Ji (500/-)</td>
              </tr>
              <tr>
                <th className="text-center">Plot No 19 (1st Floor)</th>
                <th className="text-center">Plot No 20 (1st Floor)</th>
              </tr>
              <tr>
                <td className="done">DayaRam Ji (500/-)</td>
                <td className="done">Sunil Ji (500/-)</td>
              </tr>
              <tr>
                <td className="done">Rajesh Ji (500/-)</td>
                <td className="done">Rahul Dua Ji (500/-)</td>
              </tr>
              <tr>
                <th className="text-center">Plot No 19 (G.Floor)</th>
                <th className="text-center">Plot No 20 (G.Floor)</th>
              </tr>
              <tr>
                <td className="done">Sudhir Ji (500/-)</td>
                <td className="done">Sushma Ji (500/-)</td>
              </tr>
              <tr>
                <td className="notdone">YadavRam Ji</td>
                <td className="done">Ashish Ji (500/-)</td>
              </tr>
              <tr>
                <th className="text-center">Parking</th>
                <th className="text-center"></th>
              </tr>
              <tr>
                <td className="done">Baccha Floor (500/-)</td>
                <td></td>
              </tr>
            </table>
          </div>

          {/* -------------Pop-Up---------- */}

          <button
            type="button"
            className="btn btn-primary mt-2"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            Expenses
          </button>
          <div
            className="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Month Of June Expenses</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {/* -------------- */}
                <div className="modal-body">
                  <ul className="expenses">
                    <li> Total Collection= Rs 8,000 Only </li>
                    <li>
                      Last Month Balance (last 1,2 years savings) = Rs 3400
                    </li>
                    <br />
                    -------Month of May Payment-------
                    <br />
                    <br />
                    <li>Sita (Pocha) (Rs 1950 per month)</li>
                    <li>Gita (kachara) (Rs 1400 per month)</li>
                    <li>Total = Rs 3350</li>
                    <li>Month of June (From 1 June to 17 June)</li>
                    <li>Sita = Rs 1100/-</li>
                    <li>
                      New joining of Jarina(pocha wali) from 18 June (Rs 1500
                      per month)
                    </li>
                    <li>Electrical= Rs 4310</li>
                    <li>Plumber= Rs 3000</li>
                    <li> Total = Rs 7310 </li>
                    <br />
                    <b>
                      Total = 11,400 – 11,760 = Rs-360/-
                      <br />
                      Note: - Balance will be adjusted in next monthly
                      collection.
                    </b>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* -------------End Pop-Up---------- */}
        </div>
      </div>

      {/* ------------CSS-------------------- */}

      <style jsx>{`
        body {
          background-color: #fafafa;
          font-family: "Red Rose", cursive;
        }
        .modal-body {
          color: black;
        }
        .expenses {
          margin-left: -30px;
          text-align: initial;
        }
        .halfdone {
          background-color: #ecec72;
        }
        .done {
          background-color: lightgreen;
        }
        .notdone {
          background-color: #dc3c45;
          color: white;
        }

        #balance {
          font-size: 13px;
          color: white;
        }

        .aagepicche {
          margin-top: 75px;
        }

        h3 {
          width: 100%;
          color: #fff;
          background-image: linear-gradient(#6a7adf 40%, #8150e4 60%);
          box-sizing: border-box;
        }

        h3 {
          text-transform: uppercase;
          font-size: 1rem;
          animation: aagepiche 2s linear infinite;
          animation-direction: alternate;
        }

        @keyframes aagepiche {
          from {
            padding-left: 100px;
          }

          to {
            padding-right: 100px;
          }
        }

        table,
        th,
        td {
          border: 1px solid rgb(145 144 148);
          padding: 10px;
        }

        table {
          margin-left: 10px;
          font-size: 12px;
        }
        pre {
          font-family: none;
          font-size: 15px;
        }
        .imge {
          height: 485px;
        }
      `}</style>
    </>
  );
};
export default june;
