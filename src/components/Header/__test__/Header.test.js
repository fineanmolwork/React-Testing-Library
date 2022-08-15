import { screen, render } from "@testing-library/react";
import Header from '../Header'


it("Should render same text as the header",()=>{
render(<Header title='Todo'/>);
const HeadingElement = screen.getByText('Todo');
expect(HeadingElement).toBeInTheDocument();

})

// it("Should render same text as the title",()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = screen.getByRole("heading", {name: "Todo"});
// expect(HeadingElement).toBeInTheDocument();

// })
// it("Should render same text as the title",()=>{
// render(<Header title='Todo'/>);
// const HeadingElements = screen.getAllByRole("heading");
// expect(HeadingElements.length).toBe(2);

// })

// it("Should render same text as the title prop",()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = screen.getByTitle("Header")
// expect(HeadingElement).toBeInTheDocument();

// })

// it("Should render same text as the title prop",()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = screen.getByTestId("header1")
// expect(HeadingElement).toBeInTheDocument();

// })

// //Find By

// it("Should render same text as the title prop", async ()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = await screen.findByText("Todo")
// expect(HeadingElement).toBeInTheDocument();

// })
// //Query By

// it("Should render same text as the title prop", async ()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = screen.queryByText("Todo")
// expect(HeadingElement).toBeInTheDocument();

// })
// it("Should render same text as the title prop", async ()=>{
// render(<Header title='Todo'/>);
// const HeadingElement = screen.queryByText("Cats")
// expect(HeadingElement).toBeInTheDocument();

// })
