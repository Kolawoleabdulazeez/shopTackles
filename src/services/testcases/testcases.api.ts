import { createApiInstance } from "@/utils/api";

export interface GenerateTestcase_Param {
  projectOverview: string;
  isDocUpload: boolean;
  fileUpload: FileUpload;
}

export interface FileUpload {
  base64File: string;
  fileType: string;
}

export const testcasesInstance = createApiInstance("TESTCASES");

export async function generateTestcase(
  projectId: string,
  payload: GenerateTestcase_Param
): Promise<any> {
  const res = await testcasesInstance.put(`/${projectId}/generate`, payload);
  return res.data;
}


export async function getTestcases(projectId: string): Promise<any> {
  const res = await testcasesInstance.get(`/${projectId}`);
  return res.data;
}