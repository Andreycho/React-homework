import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';



function Rating({ rating }) {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;
  
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
  
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  
    return <div className="flex items-center gap-2">
        <div className="flex">
            {stars}
        </div> 
        <div className='text-lg'>
            {rating}
        </div>
    </div>;
  }
  
export default Rating;