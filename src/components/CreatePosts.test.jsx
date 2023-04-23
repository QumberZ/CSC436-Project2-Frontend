




import React from "react";
import { render, screen } from "@testing-library/react";
//import { describe, test } from '@jest/globals';
//import { it } from "@jest/globals";
import '@testing-library/jest-dom';
import CreatePage from "./CreatePosts";




describe("CreatePosts", () => {
    test("displays the correct header", () => {
      render(<CreatePage />);
      const headerElement = screen.queryByText('Create Post');
      expect(headerElement).toBeTruthy();
    });
  });
  
  

