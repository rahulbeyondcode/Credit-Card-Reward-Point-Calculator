import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "./components/form-components/input";
import SelectField from "./components/form-components/select";

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

const spendCategories = [
  { value: "fuel", label: "Fuel" },
  { value: "grocery", label: "Grocery" },
  { value: "departmental_store", label: "Departmental Store" },
  { value: "others", label: "Others" },
];

type FormType = {
  amount: string;
  category: string;
};

const schema = yup.object().shape({
  amount: yup.string().required("Amount is required"),
  category: yup.string().required("Choose a category to continue"),
});

function App() {
  const { register, handleSubmit } = useForm<FormType>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: FormType) => {
    console.log("formData: ", formData);
  };

  return (
    <div>
      <nav>
        {/* <h1>Reward Point Calculator</h1> */}
        <h1>RP Calc</h1>
      </nav>

      <form>
        <section>
          <InputField
            name="amount"
            labelText="Enter the amount"
            register={register}
          />
        </section>

        <section>
          <SelectField
            name="category"
            options={spendCategories}
            register={register}
            labelText="Choose the category"
          />
        </section>

        <button onClick={handleSubmit(onSubmit)}>Check Points</button>
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
