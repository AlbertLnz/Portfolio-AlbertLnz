const ArrowLeft = ({className, click}) => {
  return (
    <svg onClick={click} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-arrow-narrow-left ${className}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l14 0" />
        <path d="M5 12l4 4" />
        <path d="M5 12l4 -4" />
    </svg>
  )
}

export default ArrowLeft