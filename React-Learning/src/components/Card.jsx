import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Hp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Asperiores, corrupti ut obcaecati ipsum molestias maxime sapientemagnam optio nisi, exercitationem laboriosam, quas sit et repellat tempore distinctio voluptas culpa qui.",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1659540190941-66606ec13ca6?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Samsung",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Asperiores, corrupti ut obcaecati ipsum molestias maxime sapientemagnam optio nisi, exercitationem laboriosam, quas sit et repellat tempore distinctio voluptas culpa qui.",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "MACBook",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Asperiores, corrupti ut obcaecati ipsum molestias maxime sapientemagnam optio nisi, exercitationem laboriosam, quas sit et repellat tempore distinctio voluptas culpa qui.",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt={elem.name}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5">{elem.description}</p>
          </div>
          <button
            className={`px-3 py-1 ${
              elem.instock ? "bg-sky-600" : "bg-red-600"
            } text-xs rounded text-zinc-100 mt-2`}
          >
            {elem.instock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
