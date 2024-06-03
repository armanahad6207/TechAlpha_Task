function forecast({ title, keyprop, data }) {
  return (
    <div key={keyprop}>
      <div className="flex flex-col mt-3 text-white">
        <p className="border-b-2 font-medium">{title}</p>
        <div className="flex flex-row items-center justify-between w-full">
          {data.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full leading-8"
              >
                <span>{val.title}</span>
                <img src={val.icon} className="w-12" />
                <span className="text-xl font-medium leading-8">
                  {`  ${val.temp.toFixed() - 273}°`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default forecast;
