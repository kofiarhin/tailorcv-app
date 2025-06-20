import { useMutation } from "@tanstack/react-query";
import { createCv } from "../utility/helper";
const useCvMutation = () => {
  return useMutation({
    mutationKey: ["cv"],
    mutationFn: (data) => createCv(data),
    onSuccess: (data) => {},
  });
};

export default useCvMutation;
