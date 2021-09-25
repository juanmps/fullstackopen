import React, { useState } from "react";

const Button = ({ text, eventHandler }) => {
  return <button onClick={eventHandler}>{text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.stats;

  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good + bad * -1) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={(good * 100) / (good + neutral + bad) + " %"}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" eventHandler={handleGood} />
      <Button text="neutral" eventHandler={handleNeutral} />
      <Button text="bad" eventHandler={handleBad} />

      <h1>statistics</h1>
      <Statistics stats={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
