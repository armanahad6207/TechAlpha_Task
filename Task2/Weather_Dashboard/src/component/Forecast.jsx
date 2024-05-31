function forecast({ title, keyprop }) {
  return (
    <div key={keyprop}>
      <div className="flex flex-col mt-3 text-white">
        <p className="border-b-2 font-medium">{title}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12"
            />
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12"
            />
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12"
            />
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12"
            />
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12"
            />
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forecast;
