import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Installments from './components/Installments/Installments';
import interestCalculation from './helpers/interestCalculation';

export default function App() {
  const [initialMoney, setInitialMoney] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(1);
  const [period, setPeriod] = useState(1);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    if (initialMoney !== 0 && monthlyInterest !== 0) {
      const result = interestCalculation(initialMoney, monthlyInterest, period);
      setParts(Array.from(result));
    }

  }, [initialMoney, monthlyInterest, period]);

  const handleMoneyChange = value => {
    setInitialMoney(value);
  };

  const handleInterestChange = value => {
    setMonthlyInterest(value);
  }

  const handlePeriodChange = value => {
    setPeriod(value);
  }

  return (
    <div>
      <h1 className="center">React - Juros Compostos</h1>
      <Form description="Capital inicial" value={initialMoney} min='100' max='100000' step='100' onValueChange={handleMoneyChange} />
      <Form description="Taxa de juros mensal" value={monthlyInterest} min='-12' max='12' step='0.1' onValueChange={handleInterestChange} />
      <Form description="Periodo (meses)" value={period} min='1' max='36' step='1' onValueChange={handlePeriodChange} />
      {parts.length !== 0 && <Installments parts={parts} />}
    </div>
  )
}
