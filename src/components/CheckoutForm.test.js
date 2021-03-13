import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";



test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
 
  render(<CheckoutForm />);

 
  const firstName = "Bidur";
  const lastName = "Kandel";
  const address = "1 Apple Park Way";
  const city = "Cupertino";
  const state = "CA";
  const zip = "95014";

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);


  expect(firstNameInput).toHaveValue("");
  expect(lastNameInput).toHaveValue("");
  expect(addressInput).toHaveValue("");
  expect(cityInput).toHaveValue("");
  expect(stateInput).toHaveValue("");
  expect(zipInput).toHaveValue("");


  userEvent.type(firstNameInput, firstName);
  userEvent.type(lastNameInput, lastName);
  userEvent.type(addressInput, address);
  userEvent.type(cityInput, city);
  userEvent.type(stateInput, state);
  userEvent.type(zipInput, zip);

  expect(firstNameInput).toHaveValue(firstName);
  expect(lastNameInput).toHaveValue(lastName);
  expect(addressInput).toHaveValue(address);
  expect(cityInput).toHaveValue(city);
  expect(stateInput).toHaveValue(state);
  expect(zipInput).toHaveValue(zip);


  const button = screen.getByRole("button", { name: /checkout/i });
  userEvent.click(button);


  const successMessage = screen.getByText(/ordered/i);
  expect(successMessage).toBeInTheDocument();
  
  const regex = new RegExp(`${firstName} ${lastName}`, "i");
  const fullName = screen.getByText(regex);
  expect(fullName).toBeInTheDocument();
  

});
