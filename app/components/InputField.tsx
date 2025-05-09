import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface Props {
  form: any;
  placeholder: string;
  fieldName: string;
  fieldLabel: string;
  type?: string;
}

const InputField: FC<Props> = ({
  form,
  placeholder,
  fieldName,
  fieldLabel,
  type,
}) => {
  return (
    <div className="">
      <FormField
        control={form}
        name={fieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fieldLabel}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                type={type}
                className="px-4 py-6"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputField;
