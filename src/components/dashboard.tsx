import { useDispatch, useSelector } from 'react-redux';
import { append, clear, deleteLast, evaluateExpr } from '../features/operations/calSlice';
import type { RootState } from '../redux/store';

function Dashboard() {
  const dispatch = useDispatch();
  const { expression, result } = useSelector((state: RootState) => state.Calculator);

  // Button layout for scientific calculator
  const buttons = [
    ['7', '8', '9', '/', 'sqrt(', '(', ')', 'C'],
    ['4', '5', '6', '*', 'sin(', 'cos(', 'tan(', 'DEL'],
    ['1', '2', '3', '-', 'log(', 'ln(', 'exp(', '^'],
    ['0', '.', '%', '+', 'π', 'e', '=', ''],
  ];

  // Map button value to append or special action
  const handleButtonClick = (val: string) => {
    if (val === 'C') dispatch(clear());
    else if (val === 'DEL') dispatch(deleteLast());
    else if (val === '=') dispatch(evaluateExpr());
    else if (val === 'π') dispatch(append('pi'));
    else if (val === 'e') dispatch(append('e'));
    else dispatch(append(val));
  };

  return (
    <div className="sci-calc-container">
      <h2>Scientific Calculator</h2>
      <div className="display">
        <div className="expression">{expression || '0'}</div>
        <div className="result">= {result}</div>
      </div>
      <div className="button-container">
        {buttons.map((row, i) => (
          <div className="button-row" key={i}>
            {row.map((btn, j) => (
              btn ? (
                <button key={j} onClick={() => handleButtonClick(btn)}>{btn}</button>
              ) : (
                <span key={j} className="empty-btn" />
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Dashboard };

