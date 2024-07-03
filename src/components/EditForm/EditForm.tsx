import { ChangeEvent, useState } from "react";

type Props = {
  status: string;
  setStatus: (status: string) => void;
};

export const EditForm: React.FC<Props> = ({ status, setStatus }) => {
  const [selectedOption, setSelectedOption] = useState<string>(status);

  const options = [
    { label: "Completed" },
    { label: "Cancelled" },
    { label: "Pending" },
  ];
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setStatus(event.target.value);
  };
  return (
    <ul style={{ listStyle: "none" }}>
      <h2>Pick option for transaction status</h2>
      {options.map((option) => (
        <li key={option.label}>
          <input
            type="radio"
            id={option.label}
            name="radioGroup"
            value={option.label}
            checked={selectedOption === option.label}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </li>
      ))}
    </ul>
  );
};
