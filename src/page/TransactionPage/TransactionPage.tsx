import { useQuery } from "@tanstack/react-query";
import { ITransactions, getAllTransactions } from "../../servises/servises";
import { useEffect, useState } from "react";
import { TableElement } from "../../components/Table/Table";
import { ImportBtn } from "../../components/ImportBtn/ImportBtn";
import { Section } from "../TransactionPage/TransactionPageStyles";
import { ButtonWrapper, Pagination } from "./TransactionPageStyles";
import { StatusSelector } from "../../components/StatusSelector/StatusSelector";
import { TypeSelector } from "../../components/TypeSelector/TypeSelector";
import { ExportBtn } from "../../components/ExportBtn/ExportBtn";
const isAuth = true;

interface IPageClickEvent {
  selected: number;
}

const TransactionPage = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 10;
  const [filteredData, setFilteredData] = useState<ITransactions[]>([]);

  const { data, isSuccess } = useQuery<ITransactions[]>({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
    enabled: isAuth,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setFilteredData(data);
    }
  }, [isSuccess, data]);

  const filterByType = (type: string) => {
    const filteredTransactionsByType =
      data?.filter((item) => item.Type === type) || [];
    setFilteredData(filteredTransactionsByType);
  };

  const filterByStatus = (status: string) => {
    const filteredTransactionsByStatus =
      data?.filter((item) => item.Status === status) || [];
    setFilteredData(filteredTransactionsByStatus);
  };

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: IPageClickEvent) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <Section>
      <div className="container">
        <ButtonWrapper>
          <StatusSelector filterByStatus={filterByStatus} />
          <TypeSelector filterByType={filterByType} />
          <ImportBtn />
          <ExportBtn data={data || []} />
        </ButtonWrapper>
        <TableElement data={currentItems} />
        <Pagination
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </Section>
  );
};

export default TransactionPage;
