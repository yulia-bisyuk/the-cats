 export const renderDotControls = ({
  currentSlide,
  goToSlide,
  slideCount,
}) => {
  return (
      <ul
        style={{
            borderRadius: '20px',
            width: '110px',
            alignItems: 'center',
            height: '30px',
            backgroundColor: 'white',
          position: 'relative',
          margin: '0px',
          top: '15px',
          left: '15px',
          padding: '0px',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
          {[...Array(slideCount)].map((sc, i) => (

          <li
            style={{ listStyleType: 'none', display: 'inline-block' }}
            key={i + 1}
          >
<button 
onClick={goToSlide.bind(null, i)}
type="button" 
aria-label="slide 5 bullet" 
style={{cursor: 'pointer', opacity: (currentSlide === i || currentSlide - slideCount === i || currentSlide + slideCount === i) ? '1' : '0.5', background: 'transparent', border: 'none', fill: 'rgb(255, 134, 142)', padding: '0px'}} >
    <svg className="paging-dot" width="10" height="10" aria-hidden="true" focusable="false">
        <circle cx="5" cy="5" r="5"></circle>
        </svg>
        </button>
          </li>
        ))}
      </ul>
      
  );
};