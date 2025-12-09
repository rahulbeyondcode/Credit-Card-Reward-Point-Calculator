import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputField from "../../shared-components/form-components/input";
import SelectField from "../../shared-components/form-components/select";

const cardData = {
  cards: {
    byIds: {
      "1": {
        id: "1",
        displayName: "SBI Octane",
        issuer: "SBI",
        currency: "INR",
        currency_symbol: "₹",
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

const ChooseBestCard = () => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      amount: "",
      category: "",
    },
  });

  const onSubmit = (formData: FormType) => {
    console.log("formData: ", formData);
  };
  return (
    <>
      <form>
        <header>
          <h2>Enter purchase related details</h2>
        </header>
        <section>
          <InputField
            name="amount"
            type="number"
            labelText="Enter the amount"
            control={control}
          />
        </section>

        <section>
          <SelectField
            name="category"
            options={spendCategories}
            control={control}
            labelText="Choose the category"
          />
        </section>

        <button onClick={handleSubmit(onSubmit)}>Check Points</button>
      </form>

      <main>
        <header>
          <h2>See how your added cards responds to this transaction</h2>
        </header>
        <section>
          <h3>SBI Octane Card</h3>

          <section>
            <p>
              1 Reward Point = <b>25 paisa</b>
            </p>
            <p>
              SBI Octane gives <b>10</b> Reward Point per <b>100</b> spend for
              transactions on <b>Grocery</b> category
            </p>
            <p>
              This transaction gives you <b>25</b> Reward Points
            </p>
            <p>
              And in money, this is equal to <b>₹25</b>
            </p>
          </section>
        </section>
      </main>
    </>
  );
};

export default ChooseBestCard;
