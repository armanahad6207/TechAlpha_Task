function forecast({ title }) {
  return (
    <div>
      <div className="flex flex-col mt-3 text-white">
        <p className="border-b-2 font-medium">{title}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <span className="material-icons  text-red-500 leading-8">
              sunny
            </span>
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <span className="material-icons  text-red-500 leading-8">
              sunny
            </span>
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <span className="material-icons  text-red-500 leading-8">
              sunny
            </span>
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
          <div className="flex flex-col items-center p-4 leading-8">
            <span>04:03 PM</span>
            <span className="material-icons  text-red-500 leading-8">
              sunny
            </span>
            <span className="text-xl font-medium leading-8">22°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forecast;
