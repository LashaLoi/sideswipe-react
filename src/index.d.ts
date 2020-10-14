import { InstanceResult } from "sideswipeloi";

export type UseInstance<T> = (instance: InstanceResult<T>) => T;

export type UseInstances<T> = (instances: InstanceResult<T>[]) => T[];
