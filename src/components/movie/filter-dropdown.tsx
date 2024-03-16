import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterDropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="  w-[150px] h-8 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none rounded-xl">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="border border-white bg-[#0E1428]">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
