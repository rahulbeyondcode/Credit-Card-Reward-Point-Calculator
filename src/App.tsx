import { useRef, type ChangeEvent } from "react";

const cardData = {
  cards: {
    byIds: {
      "1": {
        id: "1",
        displayName: "SBI Octane",
        issuer: "SBI",
        rounding: "floor",
        network: "Rupay",
        active: true,
        reward_by_category: {
          "1": {
            category_id: "1",
            perSpend: 100,
            points: 10,
            minTxnAmount: 250,
            maxTxnAmount: 1000,
          },
          "2": {
            category_id: "4",
            perSpend: 150,
            points: 25,
            minTxnAmount: 500,
            maxTxnAmount: 4000,
          },
        },
      },
    },
    allIds: [1],
  },

  categories: {
    byIds: {
      "1": { id: "1", title: "Dining" },
      "2": { id: "2", title: "Shopping" },
      "3": { id: "3", title: "Fuel" },
      "4": { id: "4", title: "Grocery" },
      "5": { id: "5", title: "Travel" },
      "6": { id: "6", title: "Others" },
    },
    allIds: [1, 2, 3, 4, 5, 6],
  },
};

function App() {
  const formData = useRef({
    amount: "",
    category: "",
  });

  console.log("cardData: ", cardData);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target.id as "amount" | "category";
    console.log("event: ", event.target.value);
    formData.current[target] = event.target.value;

    console.log("formData: ", formData.current);
  };

  return (
    <div>
      <nav>
        {/* <h1>Reward Point Calculator</h1> */}
        <h1>RP Calc</h1>
      </nav>

      <form>
        <section>
          <label htmlFor="amount">Enter the amount</label>
          <input id="amount" type="text" onChange={handleChange} />
        </section>

        <section>
          <label htmlFor="category">Choose the category</label>
          <select id="category" onChange={handleChange}>
            <option value="fuel">Fuel</option>
            <option value="grocery">Grocery</option>
            <option value="departmental_store">Departmental Store</option>
            <option value="others">Others</option>
          </select>
        </section>

        <button>Check Points</button>
      </form>

      <main>
        <section>
          <h2>SBI Status</h2>
          <p>Reward for {}</p>
        </section>

        <section>
          <h2>Amazon Pay Status</h2>
          <p>Reward for {}</p>
        </section>

        <section>
          <h2>Octane Status</h2>
          <p>Reward for {}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
