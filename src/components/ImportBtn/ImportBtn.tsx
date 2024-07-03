import { ChangeEvent, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { addAllTransactions } from "../../servises/servises";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const ImportBtn = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addAllTransactions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] }),
        toast.success("Transactions were added successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      // toast.error("Not a valid format. Please upload a csv file");
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onImportClick = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("csvfile", selectedFile);
      mutate(formData);
    }
  };

  const handleImportClick = () => {
    fileInputRef?.current.click();
  };
  return (
    <div>
      <Button
        colorScheme="teal"
        size="md"
        onClick={handleImportClick}
        type="submit"
        value="ImportBtn"
      >
        {mutate.isLoading ? "Loading..." : "Import"}
      </Button>
      <input
        ref={fileInputRef}
        id="file"
        name="file"
        type="file"
        onChange={onImportClick}
        style={{ display: "none" }}
      />
    </div>
  );
};
