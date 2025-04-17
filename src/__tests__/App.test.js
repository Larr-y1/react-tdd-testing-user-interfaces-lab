import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with appropriate alt text", () => {
    // Arrange
    render(<App />);
    // Act
    const image = screen.getByAltText(/larry/i);
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  test("displays a second-level heading with text `About Me`", () => {
    // Arrange
    render(<App />);
    // Act
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    // Assert
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a biography paragraph", () => {
    // Arrange
    render(<App />);
    // Act
    const bio = screen.getByText(/passionate software developer/i);
    // Assert
    expect(bio).toBeInTheDocument();
  });

  
  test("displays a link to GitHub and LinkedIn", () => {
    // Arrange
    render(<App />);
    //Act
    const githubLink = screen.getByRole("link", { name: /github/i });
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/Larr-y1");
    // Act
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-linkedin-handle");
  });
  
  