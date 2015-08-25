Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

bread
meat
cheese
condiments
veggies

1. As before, one team member creates a Github project and adds the other(s) as collaborators.
2. Your project should have one HTML file that has:
3. a section of options for each sandwich part
4. the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
5. a button with a label of "Make me a sandwich"
6. an empty DOM element into which the final sandwich order and its cost will be inserted

7. The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": "2.00", "bacon": "1.50"}

8. Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.
9. Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient(s) selected by the user.
10. The team should create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.