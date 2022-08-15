import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

describe('Todo Component', () => {

const MockTodo =({})=>{
    return (
        <BrowserRouter>
        <Todo/>
        </BrowserRouter>
    )
}

const AddTodo =(tasks)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button',{name: 'Add'});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target:{value: task}})
        fireEvent.click(buttonElement)
    });
}
    
it('should show same value',()=>{
    render(<MockTodo/>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button',{name: 'Add'});
    fireEvent.change(inputElement, {target:{value: "Go Grocery Shopping"}})
    fireEvent.click(buttonElement)
    const divELement = screen.getByText(/Go Grocery Shopping/i)
    expect(divELement).toBeInTheDocument();
    
})
it('should show same value using mock function',()=>{
    render(<MockTodo/>);
    AddTodo(['Go Grocery Shopping'])
    const divELement = screen.getByText(/Go Grocery Shopping/i)
    expect(divELement).toBeInTheDocument();
    
})
it('should show multiple values',()=>{
    render(<MockTodo/>);
    AddTodo(['Go Grocery Shopping', 'Visit the Airport', 'Sleep'])
    const divELement = screen.getAllByTestId('data-test-container')
    expect(divELement.length).toBe(3);
})
it('should render the correct styles when not clicked',()=>{
    render(<MockTodo/>);
    AddTodo(['Go Grocery Shopping'])
    const divELement = screen.getByTestId('data-test-container')
    expect(divELement).not.toHaveClass('todo-item-active')
})
it('should render the correct styles when clicked',()=>{
    render(<MockTodo/>);
    AddTodo(['Go Grocery Shopping'])
    const divELement = screen.getByTestId('data-test-container')
    fireEvent.click(divELement);
    expect(divELement).toHaveClass('todo-item-active')
})

})