import PropTypes from 'prop-types';

const DashboardBanner = ({UserName}) => {
  const currentDate = new Date();
  return (
    
    <div className="p-4 py-2">
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 flex justify-between p-6 py-0 rounded-xl relative h-full">
        <div className="flex flex-col justify-between gap-16 my-4">
          <span className="font-semibold text-lg">{`${currentDate.toLocaleDateString("en-US", { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`}</span>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Welcome back, {UserName}</h1>
            <p className="text-lg md:whitespace-nowrap whitespace-normal">Always stay updated in your student portal</p>
          </div>
        </div>
        <div className="md:flex hidden shrink-0">
          <img
            src="https://files.catbox.moe/luzfny.png" 
            alt="Student"
            className="h-60"
          />
        </div>
      </div>

      
    </div>
  );
};

DashboardBanner.propTypes = {
  UserName: PropTypes.string.isRequired,
};

export default DashboardBanner;
