import { useEffect } from "react";
import "../style/dashboard.scss"
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import savingsense1 from "/savingsense1.png";
import savingsense from "/savingsense.png";
import gacempow from "/gacempow.jpg";
import { GiExpense } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { FcList } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";









function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  
  return(
    <>
      <div className="bg-savingsense fixed-top">
        <Navbar/>
      </div>
      <div className="main-container">
        <div className="child1">
          <div className="profile-pict">
           <img src={gacempow} alt="Empow car" width="100" height="100" className="text-center rounded-circle profile-picture"/>
          </div>
          <p className="text-center Profile-name">Profile Name</p>
          <div className="bg-warning">
            <hr />
          </div>
          <ul className="row ul-margin ">
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BsCalendarDate size={20}/> Date</span></p></Link>
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BiNotepad size={20}/> Note</span></p></Link>
          </ul>
        </div>
        <div className="child2">
          <div className="bg-profile-name-image">
            <Link className="nav-link fw-bold text-end me-5 sign-out" to="/"><span className="sign-out-color">Sign-out</span></Link>
            <div className="profile-pict1">
              <img src={gacempow} alt="Empow car" width="90" height="90" className="text-center rounded-circle profile-picture1"/>
            </div>
            <p className="text-center Profile-name1">Profile-name</p>
          </div>
          <h2 className="text-center p-2 shadow-sm p-3 fw-bold dashboard-fweight"><span className="">Dashboard</span></h2>
          <div className="row  d-flex justify-content-center">
            <div className=" col-10 col-md-3 col-sm-3 mt-3  income rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="i-e-b fw-bold">Income</span></h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b">$0</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3  expense rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="expense1 fw-bold">Expense</span></h5>
                <hr />
                <h5 className="text-center fw-bold expense1">$0</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3 balance rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="i-e-b fw-bold">Balance</span></h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b">$0</h5>
              </div>
            </div>
            <div className="container list-new-t row mt-5">
              <div className="card-list-s col-3 col-md-2 mx-1 rounded">
                <h5 className="list text-center mt-2 rounded"><FcList size={20}/> <span className="list-text fw-bold fs-5">List</span></h5>
              </div>
            </div>
            <div className="text-start mt-3">
              <div className="ms-5">
                <div className="card col-10 col-md-4 col-sm-4 ms-2">
                  <p className="ms-1">Date:</p>
                  <p className="ms-1">Category:</p>
                  <p className="ms-1">Amount:</p>
                  <p className="ms-1">Note:</p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="col-12 col-md-12">
                <div className="container list-new-t row ms-2 mt-5">
                  <div className="card-new-trans col-10 col-md-3 mx-1 rounded">
                    <h5 className="list text-center mt-2" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><BiCategoryAlt size={20}/><span className="list-text fw-bold fs-5">Category</span></h5>
                  </div>
                </div>
                <div className=" collapse multi-collapse ms-2" id="multiCollapseExample2">
                  <div className="bg-center">
                    <div className=" transaction-form col-11 col-md-10  bg-form mt-5">
                      <div className="col-11 col-md-11 col-sm-8 mt-4" >
                        <form  className="w-100" width="100px">
                          <fieldset>
                            <div className="input-group mb-3" width="100px">
                              <span className="input-group-text" id="inputGroup-sizing-default"><BsCalendarDate size={20}/> <span className="l1">Date</span></span>
                              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                            <div className="input-group mb-3">
                              <label className="input-group-text" htmlFor="inputGroupSelect01"><span className="incometext"><GiExpense size={20}/> <span className="l1">Type of Transaction</span></span></label>
                              <select className="form-select" id="inputGroupSelect01">
                                <option  defaultValue>Type...</option>
                                <option defaultValue="1" className="color-income">Income</option>
                                <option defaultValue="2" className="color-expense-T">Expense</option>
                              </select>
                            </div>
                            <div className="input-group mb-3">
                              <label className="input-group-text" htmlFor="inputGroupSelect01"><span className="incometext"><BiCategoryAlt size={20}/> <span className="l1">Category</span></span></label>
                              <select className="form-select" id="inputGroupSelect01">
                                <option  defaultValue>Choose...</option>
                                <option defaultValue="1" className="color-income">Income</option>
                                <option defaultValue="2" className="color-expense">Food and Drink</option>
                                <option defaultValue="3" className="color-expense">Water Bill</option>
                                <option defaultValue="4" className="color-expense">Electric Bill</option>
                                <option defaultValue="5" className="color-expense">Rent</option>
                                <option defaultValue="6" className="color-expense">Transportation</option>
                                <option defaultValue="7" className="color-expense">Study</option>
                                <option defaultValue="8" className="color-expense">Beauty</option>
                                <option defaultValue="9" className="color-expense">Health</option>
                                <option defaultValue="10" className="color-expense">Entertainment</option>
                                <option defaultValue="11" className="color-expense">Debt Payments</option>
                                <option defaultValue="12" className="color-expense">Personal Care</option>
                                <option defaultValue="13" className="color-expense">Gifts and Donations</option>
                                <option defaultValue="14" className="color-expense">Insurance</option>
                                <option defaultValue="15" className="color-expense">Miscellaneous</option>
                                <option defaultValue="16" className="color-expense">Utilities</option>
                                <option defaultValue="17" className="color-expense">Pets</option>
                                <option defaultValue="18" className="color-expense">Subscriptions</option>
                                <option defaultValue="19" className="color-expense">Home Improvement</option>
                                <option defaultValue="20" className="color-expense">Vacation and Travel</option>
                                <option defaultValue="21" className="color-expense">Clothing</option>
                                <option defaultValue="21" className="color-expense">Electronics and Gadgets</option>

                              </select>
                            </div>
                            <div className="input-group mb-3">
                              <span className="input-group-text" id="inputGroup-sizing-default"><span className="incometext"><GiWallet size={20}/> <span className="l1">Amount</span></span></span>
                              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                            <div className="mb-3">
                              <span htmlFor="exampleFormControlTextarea1" className="form-label"><span className="incometext"><BiNotepad size={20}/> <span className="l1 note-text-color">Note</span></span></span>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>    
                            <div className="col-12 save mb-4">
                              <button type="submit" className="col-3 save1 new-trans text-center rounded mt-4"><span className="list-text fw-bold fs-5 p-1">Save</span></button>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>

            {/* <form>
              <fieldset>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default"><BsCalendarDate size={20}/> <span className="l1">Date</span></span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupSelect01"><span className="incometext"><GiExpense size={20}/> <span className="l1">Expense Category</span></span></label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue>Choose...</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default"><span className="incometext"><GiExpense size={20}/> <span className="l1">Amount</span></span></span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="mb-3">
                  <span htmlFor="exampleFormControlTextarea1" className="form-label"><span className="incometext"><BiNotepad size={20}/> <span className="l1">Note</span></span></span>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>    
                  <div className="mb-3">
                    <label htmlFor="Select" className="form-label">Disabled select menu</label>
                    <select id="Select" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="FieldsetCheck"/>
                      <label className="form-check-label" htmlFor="FieldsetCheck">
                        Can't check this
                      </label>
                    </div>
                  </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </fieldset>
            </form> */}

            {/* <p className=" col-6 col-md-3 mx-1 rounded row mt-5">
              <a className="btn list" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><IoIosAddCircleOutline size={20} /><span className="list-text fw-bold">  New Transaction</span></a>
            </p>
            <div className="">
              <div className="card-new-trans1 col-12 col-md-3 mx-1 rounded">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                  <Link className="text-dec mt-2"><p className="sidebar"><span className="incometext"><AiTwotoneHome size={20}/> <span className="l1">Home</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="sidebar"><span className="incometext"><TbMoneybag size={20}/> <span className="l1">Income Category</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="sidebar"><span className="incometext"><GiExpense size={20}/> <span className="l1">Expense Category</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="sidebar"><span className="incometext"><BsCalendarDate size={20}/> <span className="l1">Date</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="sidebar"><span className="incometext"><BiNotepad size={20}/> <span className="l1">Note</span></span></p></Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard