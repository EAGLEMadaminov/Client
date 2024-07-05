import { tourPackages } from '../utils/fakeData';
import RelatedTour from '../components/RelatedTour';
const Recommended = () => {
  return (
    <div className="flex flex-wrap gap-[15px]">
      {tourPackages.map((item) => {
        return <RelatedTour key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Recommended;
