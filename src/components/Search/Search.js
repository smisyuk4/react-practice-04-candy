import { HiSearch } from 'react-icons/hi';

export const Search = ({ value, updateInputValue }) => {
  return (
    <div>
      <HiSearch />
      <input
        type="text"
        value={value}
        onChange={e => {
          updateInputValue(e.target.value);
        }}
      />
    </div>
  );
};
