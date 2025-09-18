import { ColorDto } from "../model/colorDTO";
import { getCall } from "./clientFactory/clientFactory";

export function getAllColorsBySampleId({ sampleId }: { sampleId: string }) {
  const response = getCall<ColorDto[]>(`/samples/${sampleId}/colors`);
  return response;
}
