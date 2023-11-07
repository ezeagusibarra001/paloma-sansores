import React, { useState } from "react";

interface Item {
  name: string;
  bullets: string[];
}

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemComponent: React.FC<Props> = ({ items, setItems }) => {
  const [itemName, setItemName] = useState<string>("");
  const [bulletText, setBulletText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleBulletInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBulletText(e.target.value);
  };

  const handleAddItem = () => {
    if (itemName.trim() !== "") {
      const newItem: Item = { name: itemName, bullets: [] };
      setItems([...items, newItem]);
      setItemName("");
    }
  };

  const handleAddBullet = (index: number) => {
    if (bulletText.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[index].bullets.push(bulletText);
      setItems(updatedItems);
      setBulletText("");
    }
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className="mb-4">
          <input  
            type="text"
            className="border rounded p-2 mb-2"
            placeholder="Nombre del item"
            value={item.name}
            onChange={(e) => {
              const updatedItems = [...items];
              updatedItems[index].name = e.target.value;
              setItems(updatedItems);
            }}
          />
          <ul>
            {item?.bullets?.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex gap-2">
                <li >{bullet}</li>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    const updatedItems = [...items];
                    updatedItems[index].bullets.splice(bulletIndex, 1);
                    setItems(updatedItems);
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </ul>
          <input
            type="text"
            className="border rounded p-2 mb-2"
            placeholder="Agregar detalle"
            value={bulletText}
            onChange={handleBulletInputChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddBullet(index)}
          >
            Agregar detalle
          </button>
        </div>
      ))}

      <input
        type="text"
        className="border rounded p-2 mr-2"
        placeholder="Nombre del item"
        value={itemName}
        onChange={handleInputChange}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleAddItem}
      >
        Agregar Item
      </button>
    </div>
  );
};

export default ItemComponent;
