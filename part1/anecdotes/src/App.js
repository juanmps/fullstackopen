import React, { useState } from 'react';


const Button = ({ eventHandler, text }) => {
  return (
    <button onClick={eventHandler}>{text}</button>
  );
}


const MostVoted = ({votesObj, anecdotes}) => {
  const getMostVoted = (votesObj) => {
    return Object.keys(votesObj).reduce((i1, i2) => votesObj[i1] > votesObj[i2] ? i1 : i2);
  };

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMostVoted(votesObj)]}</p>
    </div>
  );
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const votesF = {};

  anecdotes.forEach((val,i) => {
    votesF[i] = 0;
  });

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({...votesF});

  const voteAnecdote = (selected) => {
    const currentVotes = { ...votes };

    currentVotes[selected] += 1;
    setVotes(currentVotes);
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length));
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      
      <Button eventHandler={() => voteAnecdote(selected)} text="vote" />
      <Button eventHandler={getAnecdote} text="next anecdote" />

      <MostVoted votesObj={votes} anecdotes={anecdotes} />
    </div> 
  )
}

export default App;