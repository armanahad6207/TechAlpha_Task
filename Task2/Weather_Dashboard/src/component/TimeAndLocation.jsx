// eslint-disable-next-line react/prop-types
export default function TimeAndLocation({ localTime, name, country }) {
  return (
    <div>
      <div className="text-white">
        <div className="flex items-center justify-center py-4">
          <p className="text-xl font-medium">{localTime}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-3xl font-medium ">
            {" "}
            {name},{country}
          </p>
        </div>
      </div>
    </div>
  );
}
