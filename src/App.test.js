import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ExchangeRateWidget from "./App";

describe("ExchangeRateWidget", () => {
  it("should render the component with initial values", async () => {
    render(<ExchangeRateWidget />);
    
    expect(screen.getByText("Exchange Rate Widget")).toBeInTheDocument();
    expect(screen.getByLabelText("Base Currency:")).toHaveValue("ETH");
    expect(screen.getByLabelText("Quote Currency:")).toHaveValue("USD");
    expect(screen.getByTestId("base-value-input")).toHaveValue(1);
    expect(screen.getByTestId("quote-value-input")).toHaveValue(0);
  });

  it("should update the quote value when changing the base value", async () => {
    render(<ExchangeRateWidget />);
    const baseValueInput = screen.getByTestId("base-value-input");
    fireEvent.change(baseValueInput, { target: { value: "10" } });
    await waitFor(() => expect(parseInt(screen.getByTestId("quote-value-input").value)).toBeGreaterThan(1)); // wait for the exchange rate to be fetched
  });

  it("should update the quote value and exchange rate when changing the base currency", async () => {
    render(<ExchangeRateWidget />);

    const baseCurrencySelect = screen.getByLabelText("Base Currency:");
    fireEvent.change(baseCurrencySelect, { target: { value: "LTC" } });

    await waitFor(() => expect(parseInt(screen.getByTestId("quote-value-input").value)).toBeGreaterThan(1)); // wait for the exchange rate to be fetched
    expect(screen.getByLabelText("Base Currency:")).toHaveValue("LTC");
    // Value are dynamic so we can't match exactlly 
    expect(parseInt(screen.getByTestId("quote-value-input").value)).toBeGreaterThan(1)
    expect(screen.getByTestId("exchange-rate")).toBeInTheDocument();
  });

  it("should update the quote value and exchange rate when changing the quote currency", async () => {
    render(<ExchangeRateWidget />);

    const quoteCurrencySelect = screen.getByLabelText("Quote Currency:");
    fireEvent.change(quoteCurrencySelect, { target: { value: "EUR" } });
    
    await waitFor(() => expect(parseInt(screen.getByTestId("quote-value-input").value)).toBeGreaterThan(1)); // wait for the exchange rate to be fetched
    expect(screen.getByLabelText("Quote Currency:")).toHaveValue("EUR");
    expect(parseInt(screen.getByTestId("quote-value-input").value)).toBeGreaterThan(1)
    expect(screen.getByTestId("exchange-rate")).toBeInTheDocument();
  });
});
