import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const [showUser, setShowUser] = useState(false);

  const handleFoodChange = (food: string) => {
    setFavoriteFoods((currentFoods) =>
      currentFoods.includes(food)
        ? currentFoods.filter((item) => item !== food)
        : [...currentFoods, food]
    );
  };

  const handleDisplayUser = () => {
    setShowUser(true);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setFavoriteFoods([]);
    setShowUser(false);
  };

  return (
    <div>
      <h1>User Form</h1>

      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Favorite Foods:</label>

          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={favoriteFoods.includes("Chicken")}
              onChange={() => handleFoodChange("Chicken")}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={favoriteFoods.includes("Beef")}
              onChange={() => handleFoodChange("Beef")}
            />
            <label htmlFor="beef">Beef</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={favoriteFoods.includes("Vegetables")}
              onChange={() => handleFoodChange("Vegetables")}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={favoriteFoods.includes("Dessert")}
              onChange={() => handleFoodChange("Dessert")}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={favoriteFoods.includes("Pork")}
              onChange={() => handleFoodChange("Pork")}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplayUser}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      <div className="output">
        {showUser && (
          <p>
            Hello {firstName} {lastName}. You are {age} years old and your
            favorite foods are: {favoriteFoods.join(", ")}.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;