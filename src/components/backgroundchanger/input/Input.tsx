
interface colorProps {
  setBgColor: (st:string) => void
}

const Input = ({setBgColor}:colorProps) => {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  }
  
  return (
    <>
      <input
        className={`border border-solid border-slate-500 px-3 py-1 focus:outline-slate-500`}
        type="text"
        onChange={handleChange}
        placeholder="Enter Color"
      />
    </>
  );
};

export default Input;
