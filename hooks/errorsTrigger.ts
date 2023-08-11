import { FormValuesTypeRegister } from "@/components/auth/Registration/type";
import { FieldErrors, UseFormTrigger } from "react-hook-form";
import { FormValuesTypeLogin } from "components/auth/Login/type"


export function errorsTrigger(
  trigger: UseFormTrigger<any>,
  errors: FieldErrors<FormValuesTypeRegister | FormValuesTypeLogin>
) {
  Object.keys(errors).forEach((fieldName: any) => {
    trigger(fieldName);
  });
}