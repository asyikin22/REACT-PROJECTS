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

# TO DO LIST 

---------------------------
**SETTING UP**
---------------------------

**Create 2 states variable**
1) Task - initial state = empty array
2) newTask - initial state = empty string

**Create functions**
* Handle input change with paramater event = text box when we type in something
* Add task, no parameter
* Delete task, parameter index
* Move task up, parameter indeX
* Move task down, parameter index

---------------------------
**HTML ELEMENTS**
---------------------------
**Div elements**
  * h1 element
  * input element
    1) Type
    2) Placeholder
    3) Value
    4) onChange event handler (handle input change)
  * button element - onClick event handler (insert task)

**Display list items:** Create an ordered list
- Use map() method with parameter(task, index)
- Inside map method, use an arrow function to create a list
- Add a key for each element to keep track of it.
- Add a span element for text, add JS current task {task}.
- Task NOT taskS. Plural form tasks will display all three initial states in one line and repeat it for 3 times

**Button**
* Remove - onClick event handler, wrap inside arrow function - remove task call back function with index as parameter
* Shift up - onClick event handler, wrap inside arrow function - shift task up call back function with index as parameter
* Shift down - onClick event handler, wrap inside arrow function - shift task down call back function with index as parameter

---------------------------
**ERROR**
---------------------------
![image](https://github.com/asyikin22/REACT-PROJECTS/assets/148519441/60f7bd4a-572d-44f1-9f47-2e7432d33c29)

**ISSUES**
* I have trouble creating space between the text on the list and the 3 buttons to its right.
* Honestly I couldnt be bothered to fix it. front end flexbox is literally the bane of my existence and i quite hate this part lol
* The styling also didnt quite work on the buttons. I spent hours debugging looking for answer (read: asking ChatGpt)
* I might come back to this when Im in the right mood to give it another shot 😩

**UPDATE 14/5/2024**
* I need to import styles as objects because I am using CSS module for a specific component and NOT the traditional CSS file
* For traditional CSS file method, I can just leave the className as it is
* BUT if I have a CSS module, i need to write it as {styles.className} inside the HTML element.
* Curly braces is used to import styles as object in HTML element.
* For a class name that has hyphen in it, it should be encapsulated within square bracket []and be treated as string. for example - "insert-button"
* Now I can style them individually! 🎉

![image](https://github.com/asyikin22/REACT-PROJECTS/assets/148519441/10704ee8-fec9-4278-b5d2-f137193454da)


# DIGITAL CLOCK 🕒

**SETTING UP**:
* Import two hooks from reacts using object destructuring
* Write export statement to App.jsx
* Return a fragment (<></>)
* Create HTML element
* Style it inside module.css

**MOUNT COMPONENT**: useEffect() hook = arrow function, empty array dependency
  1) 	Start the timer only when we mount the component
  2) 	Create a constant of interval Id. Pass in CB and time in millisecond to repeat the call back
  3) 	Every 1000ms we will update the state of time using our setter, setTime - pass in new date object

**UNMOUNT COMPONENT**: Cleanup function - return clock to zero (0)
- Clear the time interval
- When the component unmounts, we will return clear interval function with intervalId as parameter

**Create function Format time()**

![image](https://github.com/asyikin22/REACT-PROJECTS/assets/148519441/63d9184c-c810-4f1d-81de-3b2beac557f5)


**Create padZero() function to give 0 to single digit**
* Pass each of unit of time to the padZero function
* Enclose it inside padZero function
* Inside the function, check if number is less than 10.
* If the number is single digit, we add 0 to the front using string  concatenation
* If number is 2 digits, we return an empty strings - number remain the same
* Results - unit of time with leading zero.

![image](https://github.com/asyikin22/REACT-PROJECTS/assets/148519441/ab508851-d15f-4cf8-af86-df2fef369c76)




