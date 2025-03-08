import { useState } from "react";
import { FaGoogle, FaVk, FaDiscord, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FunZicHome() {
  const [search, setSearch] = useState("");
  const [products] = useState([
    { id: 1, name: "Игровая валюта", price: "500 ₽", rating: 4.5 },
    { id: 2, name: "Скин персонажа", price: "1200 ₽", rating: 4.8 },
    { id: 3, name: "Дополнительная миссия", price: "800 ₽", rating: 4.2 },
  ]);

  return (
    <div className="bg-purple-600 min-h-screen flex flex-col items-center p-4 text-white">
      <header className="w-full flex justify-between items-center p-4 bg-purple-700 shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold">FunZic</h1>
        <div className="flex gap-2">
          <Button className="bg-white text-black flex items-center gap-2">
            <FaGoogle /> Войти через Google
          </Button>
          <Button className="bg-white text-black flex items-center gap-2">
            <FaVk /> Войти через ВКонтакте
          </Button>
        </div>
      </header>
      
      <div className="mt-6 w-full max-w-2xl flex items-center gap-2 bg-white p-2 rounded-xl text-black">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Поиск по товарам..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {["Экшн", "Стратегии", "Гонки", "РПГ"].map((category) => (
          <Card key={category} className="bg-purple-800 text-center p-4 rounded-xl shadow-lg">
            <CardContent>{category}</CardContent>
          </Card>
        ))}
      </section>
      
      <h2 className="text-2xl font-bold mt-8">Товары</h2>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {products.map((product) => (
          <Card key={product.id} className="bg-white text-black p-4 rounded-xl shadow-lg">
            <CardContent>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <div className="flex items-center gap-1 text-yellow-500">
                <FaStar /> {product.rating}
              </div>
              <Button className="mt-2 bg-purple-700 text-white flex items-center gap-2 w-full">
                <FaShoppingCart /> Купить
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
      
      <footer className="mt-auto p-4 text-center text-sm bg-purple-700 w-full rounded-t-xl">
        &copy; 2025 FunZic | Все права защищены
      </footer>
    </div>
  );
}
