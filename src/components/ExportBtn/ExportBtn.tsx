import { Button } from "@chakra-ui/react";
import { json2csv } from "json-2-csv";
import { saveAs } from "file-saver";
import { ITransactions } from "../../servises/servises";

type Props = {
  data: ITransactions[];
};

export const ExportBtn: React.FC<Props> = ({ data }) => {
  const columns = [
    { label: "TransactionId", key: "TransactionId" },
    { label: "Status", key: "Status" },
    { label: "Type", key: "Type" },
    { label: "ClientName", key: "ClientName" },
    { label: "Amount", key: "Amount" },
  ];

  const csvData = data.map((item) => ({
    TransactionId: item.TransactionId,
    Status: item.Status,
    Type: item.Type,
    ClientName: item.ClientName,
    Amount: item.Amount,
  }));

  const downloadCSV = async () => {
    try {
      const csv = await json2csv(csvData, {
        keys: columns.map((col) => col.key),
      });
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "transactions.csv");
    } catch (error) {
      //console.error("Error generating CSV: ", error);
    }
  };

  return (
    <Button
      colorScheme="teal"
      size="md"
      type="submit"
      value="ExportBtn"
      onClick={downloadCSV}
    >
      Export
    </Button>
  );
};
