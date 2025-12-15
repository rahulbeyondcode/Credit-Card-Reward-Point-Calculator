# Credit Card Reward Point Calculator

A modern web application to manage credit cards and calculate the best card for any transaction based on reward points.

## Features

### ✨ Card Management

- **Add New Cards**: Create credit cards with custom reward structures
- **Edit Cards**: Update existing card details and reward categories
- **Delete Cards**: Remove cards you no longer use
- **View All Cards**: See all your cards with their reward structures at a glance

### 💳 Card Details

Each card can have:

- Card name and issuer (bank)
- Card network (Visa, Mastercard, Rupay, Amex)
- Currency and symbol
- Conversion rate (points to money)
- Multiple reward categories with:
  - Points earned per spend amount
  - Minimum and maximum transaction limits
  - Category-specific multipliers

### 🎯 Reward Categories

- Dining
- Shopping
- Fuel
- Grocery
- Travel
- Others

### 💾 Data Persistence

- All card data is automatically saved to localStorage
- Initial data loaded from JSON file
- Changes persist across browser sessions

## Tech Stack

- **React 19** with TypeScript
- **React Hook Form** for form management
- **Yup** for validation
- **React Router** for navigation
- **Vite** for build tooling
- **Vanilla CSS** with modern design

## Project Structure

```
src/
├── App.tsx                 # Main app component with routing
├── index.css              # Global styles
├── context/
│   └── CardContext.tsx    # Card state management
├── types/
│   └── card.types.ts      # TypeScript type definitions
├── data/
│   └── cards.json         # Initial card data
├── features/
│   ├── choose-best-card/  # Calculate best card for transaction
│   └── update-cards-list/ # Card CRUD operations
│       ├── index.tsx      # Main cards section
│       ├── CardList.tsx   # Display all cards
│       ├── CardForm.tsx   # Add/Edit card form
│       └── styles.css     # Card management styles
└── shared-components/
    └── form-components/   # Reusable form inputs
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Usage

### Adding a Card

1. Navigate to "My Cards" section
2. Click "Add New Card"
3. Fill in basic information:
   - Card name (e.g., "SBI Octane")
   - Issuer/Bank
   - Card network
   - Currency details
   - Conversion rate (e.g., 0.25 means 4 points = ₹1)
4. Add reward categories:
   - Click "Add Category"
   - Select category (Fuel, Dining, etc.)
   - Enter points earned
   - Enter spend amount (per ₹100, etc.)
   - Optionally set min/max transaction limits
5. Click "Add Card" to save

### Editing a Card

1. Find the card in your list
2. Click the edit icon (pencil)
3. Modify any details
4. Click "Update Card"

### Deleting a Card

1. Find the card in your list
2. Click the delete icon (trash)
3. Confirm deletion

## Example Card Structure

```json
{
  "id": "1",
  "displayName": "SBI Octane",
  "issuer": "SBI",
  "network": "Rupay",
  "currency": "INR",
  "currency_symbol": "₹",
  "moneyPerPoint": 0.25,
  "reward_by_category": {
    "3": {
      "category_id": "3",
      "perSpend": 100,
      "points": 25,
      "minTxnAmount": 500,
      "maxTxnAmount": 4000
    }
  }
}
```

This means: For Fuel category, earn 25 points per ₹100 spent, valid for transactions between ₹500-₹4000.

## Future Enhancements

- [ ] Best card calculator implementation
- [ ] Transaction history
- [ ] Monthly rewards tracking
- [ ] Card comparison view
- [ ] Export/Import card data
- [ ] Dark/Light theme toggle

## License

MIT
