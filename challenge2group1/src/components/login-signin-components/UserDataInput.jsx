export default function   DataInput({label, type, id, name}){
  return (
    <div>
      <label className="label-div justify-center mt-4" htmlFor={id}>{label}</label>
      <input className="flex justify-center text-lunar rounded-[4px] w-11/12 mx-auto " id={id} name={name} type={type ? type : "text"} />
    </div>
  )
}