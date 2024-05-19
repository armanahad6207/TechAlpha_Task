function TopBtn() {
  const cities = [
    { id: 1, title: "London" },
    {
      id: 2,
      title: "Sydeny",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 2,
      title: "Tokyo",
    },
  ];
  return (
    <div className="flex justify-between  my-2">
      {cities.map((val) => {
        return (
          <button key={val.id} className="text-white">
            {val.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopBtn;
