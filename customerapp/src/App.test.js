import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // screen.debug()
  const linkElement = screen.getByText(/Welcome to react/i);
  expect(linkElement).toBeInTheDocument();
});

it("render customers", () => {
  // render(<App />);
  // let btns = screen.getAllByRole("button"); // form element
  // expect(btns.length).toBe(6); 

  let {container} = render(<App/>);
  let btns = container.querySelectorAll(".row");
  expect(btns.length).toBe(6); 
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.getAllByRole("button");
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole("button");
  expect(btns.length).toBe(5); 
});

it("filter customers ", () => {
  render(<App />);
  let txtBox = screen.getByPlaceholderText("search by name")
  fireEvent.change(txtBox, {"target" : {"value" :"Geller"}});
  screen.debug();
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(2); 
});