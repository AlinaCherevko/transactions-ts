import { Box, Select } from "@chakra-ui/react";

type Props = {
  filterByType: (type: string) => void;
};

export const TypeSelector: React.FC<Props> = ({ filterByType }) => {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filterByType(e.target.value);
  };
  return (
    <Box width="300px">
      <Select placeholder="Type" onChange={onSelectChange}>
        <option value="Refill">Refill</option>
        <option value="Withdrawal">Withdrawal</option>
      </Select>
    </Box>
  );
};
