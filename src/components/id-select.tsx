import { Raw } from "types";
import { Select } from "antd";

type SelectProrps = React.ComponentProps<typeof Select>;
interface IdSelectProps
  extends Omit<SelectProrps, "value" | "onChange" | "options"> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOprionName?: string;
  options?: { name: string; id: number }[];
}

/****
 * value 可以传入多种类型的值
 * onChange只会回调numbe|undefined类型的值
 * 当 isNaN(Number(value))为true的时候，代表选择默认类型
 * 当选择默认类型的还是，onChange会回调undefined
 * @param props
 * @constructor
 ****/
const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
export const IdSelect = (props: IdSelectProps) => {
  const { value, onChange, defaultOprionName, options, ...restProp } = props;
  return (
    <Select
      value={toNumber(value)}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...restProp}
    >
      {defaultOprionName ? (
        <Select.Option value={0}>{defaultOprionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};
