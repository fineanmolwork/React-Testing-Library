import {screen, render, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';


const mockSetTodo = jest.fn();
describe("Add Input Element Test",()=>{
    it("Input exist in the DOM",()=>{
        render(<AddInput todos={[]} setTodos={mockSetTodo}/>);
        const InputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(InputElement).toBeInTheDocument();
    })
    it("Should be able to type into Input",()=>{
        render(<AddInput todos={[]} setTodos={mockSetTodo}/>);
        const InputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(InputElement, {target: {value: "Go Grocery Shopping"}});
        expect(InputElement.value).toBe("Go Grocery Shopping");
    })
    it("Should be empty input when button is clicked",async()=>{
        render(<AddInput todos={[]} setTodos={mockSetTodo}/>);
        const InputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const ButtonElement = await screen.findByRole("button", {name: /Add/i});
        fireEvent.change(ButtonElement, {target: {value: "Go Grocery Shopping"}});
        fireEvent.click(ButtonElement);
        expect(InputElement.value).toBe("");
    })
})