import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type VolunteeringDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class VolunteeringData {
  readonly id: string;
  readonly ActType: string;
  readonly ActDate?: string | null;
  readonly ActHours?: number | null;
  readonly ActLocation?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VolunteeringData, VolunteeringDataMetaData>);
  static copyOf(source: VolunteeringData, mutator: (draft: MutableModel<VolunteeringData, VolunteeringDataMetaData>) => MutableModel<VolunteeringData, VolunteeringDataMetaData> | void): VolunteeringData;
}