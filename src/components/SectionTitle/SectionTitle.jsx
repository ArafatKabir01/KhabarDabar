

const SectionTitle = ({heading , subHeading}) => {
  return (
    <div className="text-center py-10">
        <p className="text-amber-500">{subHeading}</p>
        <div className="divider w-[424px] mx-auto"></div> 
        <h3 className="text-5xl">{heading}</h3>
        <div className="divider w-[424px] mx-auto"></div> 
    </div>
  )
}

export default SectionTitle