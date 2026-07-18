import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiErrorResponse, ApiSuccessResponse } from "../project/useProject";
import { AxiosError } from "axios";
import { generateTestcase, GenerateTestcase_Param } from "./testcases.api";
import { toast } from "sonner";



export function useGenerateTestcase(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();

  return useMutation<
    ApiSuccessResponse,
    AxiosError<ApiErrorResponse>,
    { projectId: string; payload: GenerateTestcase_Param }
  >({
    mutationFn: ({ projectId, payload }) =>
      generateTestcase(projectId, payload),

    onSuccess: (data, variables) => {
      toast.success(
        data?.responseMessage || "Testcases generated successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["project-testcases", variables.projectId],
      });

      onSuccessCallback?.();
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.details?.responseMessage ||
          "Failed to generate testcases"
      );
    },
  });
}