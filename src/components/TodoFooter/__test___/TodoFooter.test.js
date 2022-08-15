import {screen, render} from '@testing-library/react';
import TodoFooter  from '../TodoFooter';
import {BrowserRouter} from 'react-router-dom'  ;

const MockComponent = ({task})=>{
    return (
        <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={task}/>
        </BrowserRouter>
    )
}

describe("Todo Footer",()=>{
    describe("Testing multiple tasks",()=>{
        it("should render the correct number", () => {
            render(<MockComponent task={3} />);
            const paragraphElement = screen.getByText('3 tasks left')
            expect(paragraphElement).toBeInTheDocument();
        })

    })
    it("should render the single incomplete task number", () => {
        render(<MockComponent task={1} />);
        const paragraphElement = screen.getByText('1 task left')
        expect(paragraphElement).toBeInTheDocument();
    })

})
// it("should render the single incomplete task number", async() => {
//     render(<MockComponent task={1} />);
//     const paragraphElement = screen.getByRole("link")
//     expect(paragraphElement).toHaveTextContent("Followers")
// })
// it("should render the two incomplete task number", async() => {
//     render(<MockComponent task={2} />);
//     const paragraphElement = await screen.findByTestId("paragh")
//     expect(paragraphElement.textContent).toBe("2 tasks left")
// })