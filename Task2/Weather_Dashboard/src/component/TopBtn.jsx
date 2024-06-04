/* eslint-disable react/prop-types */

function TopBtn({ setquery }) {
  const cities = [
    { id: 1, title: "Chennai" },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Kolkata",
    },
    {
      id: 5,
      title: "Jaipur",
    },
  ];

  return (
    <div className="flex justify-between  my-2">
      {cities.map((val) => {
        return (
          <button
            key={val.id}
            className="text-white hover:bg-slate-400 px-4 py-1 rounded-sm"
            onClick={() => {
              setquery({ q: val.title });
            }}
          >
            {val.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopBtn;
