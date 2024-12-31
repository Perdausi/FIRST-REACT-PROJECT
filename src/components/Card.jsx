export default function Card({children, bg = 'bg-gray-100'}) {   
    return(
        <div className={`${bg} rounded p-8 shadow-md`}>{children}</div>
    )
  }