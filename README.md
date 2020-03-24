# Colour Interface

## Outcome

A user interface with three buttons, each labelled "Red", "Green", "Blue". When any of the three buttons is pressed, the background colour of the interface will transition (animate) to match a custom shade corresponding with the button text. Also add an element that will update with text to show the colour value (as it would be applied through CSS).

## Start By...

1. Fork this repository
2. Clone your fork
   - Commit after *each* step or sub-step

## Approach a Solution

### STEP 1: Prototype 

1. Build a version of the interface described above using only HTML and CSS
2. Using your browser's developer tools, determine which elements must be modified, and how, to transition from the default background color, to one of the colours (start with red)
3. Ask yourself whether there are other ways to achieve the same result using only HTML/CSS, if so, true those as well

### STEP 2: Document

1. Document all of your trials (and the results) using Github's "Issues" and/or "Project" tools
2. Write a paragraph (or two) that describes the goal of the project in your own words, using *more specific* language than is used in the [Outcome](#outcome) section above

### STEP 3: Breakdown Tasks

1. Once satisfied with a potential solution, breakdown the problem into single tasks that are **specific** and can easily be tested
2. Use individual Javascript comments to write the steps to the file `js/index.js`. For example:
   - `// Set the background-color property to red`
   - `// Listen for a 'click' of the #red button`

### STEP 4: Isolated Testing

1. Add an `id` attribute to all element that will need to be interacted with or modified
2. Store *all* `document` Element references into their own variables at the top of `js/index.js`
   - Label it "References"
3. Write a single line of test code for each comment written as part of [Step 3](#step-3-breakdown-tasks) above
   - Each line **must** be able to execute independently (imagine it's the only line of code in the document), even if that means creating fake test values or temporary variables

### STEP 5: Combine and Test

1. Paste the first line of executable code you want to test into the appropriate functions or listener callbacks
2. Remove test values (if they exist)
3. Test the new line of code
4. Repeat until each line is in place and tested
5. Document any concerns or trouble as you go, even if it was an easy fix
   - Writing (or speaking) your mistakes and solutions out loud will reduce the instances of them happening again in the future!
