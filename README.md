# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# COLOR SELECTOR PROGRAM

**STEP-BY-STEP**:

---------------------------
**Color Selector Component**
---------------------------

- Create a colour selector file inside src folder, create function component, return a fragment and write export default statement,
- Import color selector component from its location inside app.jsx and include the component inside return statement
- Import useState hook inside color selector component using object destructuring to get useState() hook
- Create a stateful variable constant - use array destructuring […] AND setter function = [color, setColor]
- Use hexadecimal value to set the color

---------------------------
**HTML element**
---------------------------
* Create HTML element - div element, h1 element, nested div element (color-display), para element, label element, input element
* Style the display element: style attribute = JavaScript
* CSS JS needs to be enclosed within an object - 2 sets of curly braces

---------------------------
**onChange event handler:**
---------------------------
 * Callback to change color: onChange event handler
 * Input = value will be equal to {color} stateful color variable
 * onChange set equal to a callback to a function handleColorChange
 * Create a new function to handle color change - set (event) as parameter, use setter function to access event, target and its value

---------------------------
**Styling**
---------------------------

* Create a COLOR folder inside src folder, move the  file into it
* Create a CSS stylesheet within COLOR folder - Color.module.css
* Add styling inside Color.module.css
* Import the new CSS file into ColorSelector.jsx to apply styling.
* Write import, styles, from, name of the CSS folder
* Inside the function ColorSelector, assign value of className to styles.container & styles.display wrapped in curly braces

---------------------------
**Result**
---------------------------

![image](https://github.com/asyikin22/REACT-PROJECTS/assets/148519441/0bf89602-1811-4ee6-9a04-6e25687dcee7)






