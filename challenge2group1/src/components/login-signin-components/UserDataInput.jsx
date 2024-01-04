export default function DataInput({label, type, id, name}){
  return (
    <div>
      <label className="label-div justify-center" htmlFor={id}>{label}</label>
      <input className="text-lunar rounded-[4px]" id={id} name={name} type={type ? type : "text"} />
    </div>
  )
}