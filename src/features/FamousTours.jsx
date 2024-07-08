import { tourPackages } from '../utils/fakeData';
import RelatedTour from '../components/RelatedTour';

const FamousTours = () => {
  return (
    <div className="flex flex-wrap gap-[15px]">
      {tourPackages.map((item) => {
        return <RelatedTour key={item.id} data={item} />;
      })}
    </div>
  );
};

export default FamousTours;
