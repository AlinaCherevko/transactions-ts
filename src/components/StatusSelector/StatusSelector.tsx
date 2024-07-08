import { Box, Select } from "@chakra-ui/react";

type Props = {
  filterByStatus: (status: string) => void;
};
export const StatusSelector: React.FC<Props> = ({ filterByStatus }) => {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filterByStatus(e.target.value);
  };
  return (
    <Box width="300px">
      <Select placeholder="Status" onChange={onSelectChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </Select>
    </Box>
  );
};
