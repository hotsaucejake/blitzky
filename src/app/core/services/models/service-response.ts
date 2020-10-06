import { ServiceData } from './service-data';
import { ServiceError } from './service-error';

export type ServiceResponse<T> = ServiceData<T> | ServiceError;
