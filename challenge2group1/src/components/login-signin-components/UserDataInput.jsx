export default function DataInput({label, type, id, name}){
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type ? type : "text"} />
    </div>
  )
}