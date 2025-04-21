


function Card({name,bios,topic}) {
    return (
      <div className="p-6  rounded shadow-xl max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h3 className="text-xl text-gray-700 mb-4">{bios}</h3>
        <h2 className="text-2xl font-semibold mb-2">{topic}</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Iconic</li>
          <li>Open Source</li>
          <li>App Dev</li>
        </ul>
        <div className="">
          <button className="bg-blue-500 hhover:outline hover:outline-2 hover:outline-white text-white px-4 py-2 rounded mr-2">LinkedIn</button>
          <button className="bg-blue-500 hhover:outline hover:outline-2 hover:outline-white text-white px-4 py-2 rounded">Twitter</button>
        </div>
      </div>
    );
  }
  

export default Card;
