import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiSettings";

const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  // the return gotten from the useMutation
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // when the delete is Successful
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries({
        // this is to know which queryKey to delete from
        queryKey: ["cabins"],
      });
    },
    // error message
    onError: (error) => toast.error(error.message || error),
  });
  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
