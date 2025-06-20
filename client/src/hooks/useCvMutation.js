import { useMutation } from "@tanstack/react-query";
import { createCv } from "../utility/helper";

const useCvMutation = () => {
  return useMutation({
    mutationKey: ["cv"],
    mutationFn: async (data) => {
      return await createCv(data); // make sure createCv returns a Promise
    },
    onSuccess: (data) => {
      // You can trigger toast or cache update here if needed
    },
    onError: (error) => {
      console.error("CV upload error:", error.message);
    },
  });
};

export default useCvMutation;
