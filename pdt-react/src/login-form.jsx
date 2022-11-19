import { useState, useCallback, useEffect } from "react";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  //   const titleChangeHandler = (event) => {
  // setEnteredTitle(event.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setEnteredAmount(event.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredAmount: event.target.value,
  //     // });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredDate: event.target.value,
  //     // });
  //   };
  const onLogin = (event) => {
    event.preventDefault();
    const user = {
      password,
      uname: userName,
    };
    console.log("entry", user);
    setUserName("");
    setPassword("");
    loginService(user);
  };

  const loginService = async (body) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    // const response = await fetch("https://swapi.dev/api/films/");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log("movies", data);
  };

  //   async function fetchMoviesHandler() {
  //     setIsLoading(true);
  //     const response = await fetch("https://swapi.dev/api/films/");
  //     const data = await response.json();

  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //     setIsLoading(false);
  //   }

  //   const submitHandler = (event) => {
  //     event.preventDefault();

  //     const expenseData = {
  //       title: enteredTitle,
  //       amount: +enteredAmount,
  //       date: new Date(enteredDate),
  //     };

  //     props.onSaveExpenseData(expenseData);
  //     setEnteredTitle("");
  //     setEnteredAmount("");
  //     setEnteredDate("");
  //   };

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <span className="anchor" id="formLogin"></span>

          <div className="card rounded-0">
            <div className="card-header">
              <h3 className="mb-0">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onLogin}>
                <div>
                  <label htmlFor="uname">Username</label>
                  <input
                    id="uname"
                    type="text"
                    name="uname"
                    value={userName}
                    onChange={userNameChangeHandler}
                  />
                </div>
                <div>
                  <label htmlFor="psw">Password</label>
                  <input
                    id="psw"
                    type="password"
                    name="password"
                    value={password}
                    onChange={passwordChangeHandler}
                  />
                </div>

                <button type="submit" className="btn btn-success float-right">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <form onSubmit={submitHandler}>
    //   <div className="new-expense__controls">
    //     <div className="new-expense__control">
    //       <label>Title</label>
    //       <input
    //         type="text"
    //         value={enteredTitle}
    //         onChange={titleChangeHandler}
    //       />
    //     </div>
    //     <div className="new-expense__control">
    //       <label>Amount</label>
    //       <input
    //         type="number"
    //         min="0.01"
    //         step="0.01"
    //         value={enteredAmount}
    //         onChange={amountChangeHandler}
    //       />
    //     </div>
    //     <div className="new-expense__control">
    //       <label>Date</label>
    //       <input
    //         type="date"
    //         min="2019-01-01"
    //         max="2022-12-31"
    //         value={enteredDate}
    //         onChange={dateChangeHandler}
    //       />
    //     </div>
    //   </div>
    //   <div className="new-expense__actions">
    //     <button type="button" onClick={props.onCancel}>
    //       Cancel
    //     </button>
    //     <button type="submit">Add Expense</button>
    //   </div>
    // </form>
  );
};

export default LoginForm;
