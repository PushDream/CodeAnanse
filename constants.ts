import type { Lesson } from './types';
import { Language } from './types';

export const SYSTEM_INSTRUCTION = `You are 'Weaver', an expert programming tutor with a Socratic teaching style. You guide learners by asking questions and providing hints, rather than giving direct answers. Your tone is encouraging, wise, and slightly mystical. You explain complex concepts using analogies related to weaving, threads, and tapestries. For example, a function is a 'pattern', a variable is a 'spool of thread', a loop is a 'repeating stitch', and a bug is a 'snag in the thread'. Always respond in Markdown format.`;

const JS_COURSE: Lesson[] = [
  {
    title: 'Variables',
    conceptExplanation: `Welcome to the Code Weaver's Loom. Let's begin with the most basic element: the thread. In programming, a **variable** is like a magical spool that holds a single thread of information.

You can create a spool using the \`let\` keyword and give it a name. For example: \`let myThread = "hello"\`. This creates a variable named \`myThread\` and stores the text "hello" in it.

Your first task is to create a few spools of your own.`,
    problem: {
      title: 'Spools of Thread',
      description: 'Declare three variables: one for a character\'s name (a string), one for their age (a number), and one to check if they are a hero (a boolean).',
      goals: [
        'Understand what a variable is.',
        'Learn to declare variables using `let`.',
        'Recognize different basic data types: string, number, and boolean.',
      ],
      starterCode: `// Create a variable for the name\n\n// Create a variable for the age\n\n// Create a variable to check if they are a hero\n`,
    },
  },
  {
    title: 'Data Types & Operators',
    conceptExplanation: `You've spun your first threads! Now, let's look closer at their texture. Threads come in different types: some are text (**strings**), some are numbers (**number**), and some are simple truth-values (**boolean** - true or false).

You can also combine threads using **operators**. For numbers, you can use arithmetic operators like \`+\` for addition. For strings, \`+\` joins them together, a process called **concatenation**.

Let's practice combining different threads.`,
    problem: {
      title: 'Combining Threads',
      description: 'Create two number variables and add them together, storing the result in a third variable. Then, create two string variables and concatenate them with a space in between to form a full name.',
      goals: [
        'Understand the difference between number and string types.',
        'Use the `+` operator for both addition and concatenation.',
        'Store the result of an operation in a new variable.',
      ],
      starterCode: `// Combine two numbers\nlet score1 = 10;\nlet score2 = 20;\nlet totalScore = ...\n\n// Combine two strings\nlet firstName = "Ada";\nlet lastName = "Lovelace";\nlet fullName = ...`,
    },
  },
  {
    title: 'Functions',
    conceptExplanation: `Excellent! You've mastered the spools. Now, let's weave a pattern. A **function** is a reusable pattern of instructions. You give it some threads (inputs, called **parameters**), and it weaves something new for you (an output, called a **return value**).

In JavaScript, you create a function like this:
\`\`\`javascript
function myPattern(inputThread) {
  // Instructions go here
  return "woven: " + inputThread;
}
\`\`\`
This creates a function named \`myPattern\` that takes one input and returns a new string. Let's try weaving a simple greeting pattern.`,
    problem: {
      title: 'Weave a Greeting',
      description: 'Write a function called `greet` that takes one argument, `name`. The function should return a greeting string, like "Hello, [name]!".',
      goals: [
        'Understand the purpose of a function.',
        'Learn how to define a function with parameters.',
        'Use the `return` keyword to output a value.',
      ],
      starterCode: `function greet(name) {\n  // Your pattern goes here\n}`,
    },
  },
  {
    title: 'Conditional Logic',
    conceptExplanation: `A tapestry isn't just one continuous pattern; it changes and adapts. In coding, we use **conditional logic** to make decisions. The \`if\` statement is our primary tool for this. It checks if a condition is true, and if it is, it runs a specific block of code.

You can also provide an alternative path with \`else\` for when the condition is false.
\`\`\`javascript
if (threadColor === "blue") {
  // Weave a water pattern
} else {
  // Weave a sky pattern
}
\`\`\`
Let's create a pattern that makes a decision.`,
    problem: {
      title: 'The Forking Path',
      description: 'Write a function `canVote` that takes an `age` as a parameter. If the age is 18 or greater, it should return the string "You can vote". Otherwise, it should return "You cannot vote yet".',
      goals: [
        'Understand conditional logic using `if` and `else`.',
        'Use comparison operators like `>=`.',
        'Return different values from a function based on a condition.',
      ],
      starterCode: `function canVote(age) {\n  // Your decision-making pattern goes here\n}`,
    },
  },
  {
    title: 'Arrays',
    conceptExplanation: `You are a natural weaver! Now, what if you have a whole collection of threads? An **array** is like a bundle of threads, held together in a specific order. You create an array using square brackets \`[]\`.
\`\`\`javascript
let myThreads = ["red", "green", "blue"];
\`\`\`
You can access a single thread in the bundle using its **index**, which is its position starting from zero. So, \`myThreads[0]\` would give you "red". Let's practice working with these bundles.`,
    problem: {
      title: 'A Bundle of Threads',
      description: 'Create an array named `inventory` that contains three strings: "sword", "shield", and "potion". Then, create a new variable named `firstItem` and set its value to the first item in the `inventory` array.',
      goals: [
        'Learn how to create an array.',
        'Understand zero-based indexing.',
        'Access elements within an array using their index.',
      ],
      starterCode: `// Create your bundle of threads\nlet inventory = ...\n\n// Access the first thread\nlet firstItem = ...`,
    },
  },
  {
    title: 'Loops',
    conceptExplanation: `When you have a large bundle of threads (an array), you often want to do the same thing to each one. A **loop** is a repeating stitch that goes over each item in the array one by one. The \`for\` loop is a common pattern for this.
\`\`\`javascript
for (let i = 0; i < myThreads.length; i++) {
  // This code runs for each thread
  console.log(myThreads[i]);
}
\`\`\`
Let's use a repeating stitch to combine a bundle of number-threads into a single, final thread.`,
    problem: {
      title: 'The Summation Stitch',
      description: 'Create a function `sumArray` that takes an array of numbers and returns their sum. This is a fundamental pattern, like the first basic stitch in a grand tapestry.',
      goals: [
        'Learn to iterate over an array using a `for` loop.',
        'Understand how to use an accumulator variable.',
        'Write a function that processes an array.',
      ],
      starterCode: `function sumArray(numbers) {\n  let total = 0;\n  // Your repeating stitch goes here\n  return total;\n}`,
    },
  },
  {
    title: 'Objects',
    conceptExplanation: `Sometimes, you need a more organized way to store related threads. An **object** is like a detailed pattern card. It stores information in **key-value pairs**. Instead of an index, you use a descriptive key (a string) to find its value.
\`\`\`javascript
let heroPattern = {
  name: "Elara",
  level: 5,
  hasMagic: true
};
\`\`\`
You can access the information using dot notation, like \`heroPattern.name\`. Let's create a pattern card for a character.`,
    problem: {
      title: 'The Hero\'s Pattern Card',
      description: 'Create an object named `character` with three properties: `name` (a string), `hitPoints` (a number), and `isBrave` (a boolean). Then, create a new variable `characterName` and assign it the value of the `name` property from your object.',
      goals: [
        'Understand what an object is and why it\'s useful.',
        'Learn to create an object literal with key-value pairs.',
        'Access properties of an object using dot notation.',
      ],
      starterCode: `const character = {\n  // Add your properties here\n};\n\n// Access the name property\nconst characterName = ...`,
    },
  },
  {
    title: 'Array Methods',
    conceptExplanation: `Your thread bundles (arrays) come with some built-in magic stitches! These are called **methods**. For example, the \`.push()\` method lets you add a new thread to the end of a bundle.
\`\`\`javascript
let myThreads = ["red", "green"];
myThreads.push("blue"); // myThreads is now ["red", "green", "blue"]
\`\`\`
Another useful stitch is \`.forEach()\`, which is a simpler way to loop over each thread. Let's practice these magic stitches.`,
    problem: {
      title: 'Magic Stitches',
      description: 'Create an array of numbers. Use the `.push()` method to add a new number to the end. Then, use the `.forEach()` method to create a new function that doubles every number in an array and returns a new array with the results.',
      goals: [
        'Learn to modify an array with the `.push()` method.',
        'Learn how to use the `.forEach()` method for iteration.',
        'Practice creating and returning a new array from a function.',
      ],
      starterCode: `function doubleNumbers(numbers) {\n  const doubled = [];\n  numbers.forEach(function(num) {\n    // your logic here\n  });\n  return doubled;\n}`,
    },
  },
  {
    title: 'Arrow Functions',
    conceptExplanation: `You've learned to weave patterns with the \`function\` keyword. JavaScript has another, more concise way to create these patterns: **arrow functions**. They are like a shorthand stitch that is very common in modern weaving.
\`\`\`javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Even shorter for simple returns!
const add = (a, b) => a + b;
\`\`\`
They are especially useful with array methods. Let's refactor a pattern to use this new stitch.`,
    problem: {
      title: 'The Swift Stitch',
      description: 'Rewrite the `greet` function from a previous lesson using arrow function syntax. It should still take a `name` and return a greeting string.',
      goals: [
        'Understand the syntax of arrow functions.',
        'Convert a regular function declaration to an arrow function expression.',
        'Recognize the conciseness of arrow functions.',
      ],
      starterCode: `// Rewrite this function using arrow syntax\nfunction greet(name) {\n  return "Hello, " + name + "!";\n}`,
    },
  },
  {
    title: 'Putting It All Together',
    conceptExplanation: `You have learned to spin threads, weave patterns, make decisions, and work with bundles. Now, it's time to weave a small but complete piece of a tapestry.

This final challenge will require you to combine everything you've learned: variables, functions, objects, arrays, and loops. See how all the different stitches and threads come together to form a coherent design.`,
    problem: {
      title: 'Find the Richest Adventurer',
      description: 'You have an array of adventurer objects. Each object has a `name` and a `gold` property. Write a function `findRichest` that takes this array and returns the name of the adventurer with the most gold.',
      goals: [
        'Combine knowledge of functions, arrays, objects, and loops.',
        'Iterate through an array of objects.',
        'Keep track of a maximum value found so far.',
        'Return a specific property from the object that meets the criteria.',
      ],
      starterCode: `function findRichest(adventurers) {\n  let richestAdventurer = adventurers[0];\n\n  // Loop through the adventurers to find the one with the most gold\n\n  return richestAdventurer.name;\n}\n\n// Example usage:\nconst party = [\n  { name: "Boric", gold: 150 },\n  { name: "Elara", gold: 300 },\n  { name: "Gimli", gold: 220 }\n];`,
    },
  },
];

const PYTHON_COURSE: Lesson[] = [
    {
    title: 'Variables',
    conceptExplanation: `Welcome to the Code Weaver's Loom. Let's begin with the most basic element: the thread. In programming, a **variable** is like a magical spool that holds a single thread of information.

In Python, you create a spool simply by giving it a name and assigning it a value. For example: \`my_thread = "hello"\`. This creates a variable named \`my_thread\` and stores the text "hello" in it.

Your first task is to create a few spools of your own.`,
    problem: {
      title: 'Spools of Thread',
      description: 'Declare three variables: one for a character\'s name (a string), one for their age (an integer), and one to check if they are a hero (a boolean).',
      goals: [
        'Understand what a variable is.',
        'Learn to declare variables in Python.',
        'Recognize different basic data types: string, integer, and boolean.',
      ],
      starterCode: `# Create a variable for the name\n\n# Create a variable for the age\n\n# Create a variable to check if they are a hero\n`,
    },
  },
  {
    title: 'Data Types & Operators',
    conceptExplanation: `You've spun your first threads! Now, let's look closer at their texture. Threads come in different types: text (**strings**), whole numbers (**integers**), decimal numbers (**floats**), and truth-values (**booleans**).

You can combine threads using **operators**. You can use arithmetic operators like \`+\` for numbers. For strings, \`+\` joins them. A more powerful way is using **f-strings**, which let you embed threads directly into text.
\`\`\`python
name = "Lyra"
greeting = f"Hello, {name}!"
\`\`\`
Let's practice combining different threads.`,
    problem: {
      title: 'Combining Threads',
      description: 'Create two integer variables and add them together, storing the result in a third variable. Then, create two string variables and combine them using an f-string to form a sentence.',
      goals: [
        'Understand different number types (integer, float).',
        'Use the `+` operator for addition.',
        'Learn to format strings using f-strings.',
      ],
      starterCode: `# Combine two numbers\nscore1 = 10\nscore2 = 20\ntotal_score = ...\n\n# Combine two strings with an f-string\nfirst_name = "Guido"\nlast_name = "van Rossum"\nfull_sentence = ...`,
    },
  },
  {
    title: 'Functions',
    conceptExplanation: `Excellent! You've mastered the spools. Now, let's weave a pattern. A **function** is a reusable pattern of instructions. You give it some threads (inputs, called **parameters**), and it weaves something new for you (an output, called a **return value**).

In Python, you create a function using the \`def\` keyword:
\`\`\`python
def my_pattern(input_thread):
  # Instructions go here, indented
  return f"woven: {input_thread}"
\`\`\`
This creates a function named \`my_pattern\` that takes one input and returns a new string. Let's try weaving a simple greeting pattern.`,
    problem: {
      title: 'Weave a Greeting',
      description: 'Write a function called `greet` that takes one argument, `name`. The function should return a greeting string, like "Hello, [name]!".',
      goals: [
        'Understand the purpose of a function.',
        'Learn how to define a function with parameters using `def`.',
        'Use the `return` keyword to output a value.',
      ],
      starterCode: `def greet(name):\n  """Your pattern goes here"""\n  pass`,
    },
  },
  {
    title: 'Conditional Logic',
    conceptExplanation: `A tapestry isn't just one continuous pattern; it changes and adapts. In coding, we use **conditional logic** to make decisions. The \`if\` statement is our tool for this, followed by \`elif\` for more choices, and \`else\` for the final path.

Indentation is key in Python; it shows which stitches belong to which part of the pattern.
\`\`\`python
if thread_color == "blue":
    # Weave a water pattern (indented)
else:
    # Weave a sky pattern (indented)
\`\`\`
Let's create a pattern that makes a decision.`,
    problem: {
      title: 'The Forking Path',
      description: 'Write a function `check_temperature` that takes a `temp` as a parameter. If the temp is above 30, return "It\'s hot!". If it\'s below 10, return "It\'s cold!". Otherwise, return "It\'s just right.".',
      goals: [
        'Understand conditional logic using `if`, `elif`, and `else`.',
        'Use comparison operators like `>` and `<`.',
        'Pay close attention to indentation.',
      ],
      starterCode: `def check_temperature(temp):\n  """Your decision-making pattern goes here"""\n  pass`,
    },
  },
  {
    title: 'Lists',
    conceptExplanation: `You are a natural weaver! Now, what if you have a whole collection of threads? A **list** is like a bundle of threads, held together in a specific order. You create a list using square brackets \`[]\`.
\`\`\`python
my_threads = ["red", "green", "blue"]
\`\`\`
You can access a single thread in the bundle using its **index**, starting from zero. So, \`my_threads[0]\` gives you "red". You can add new threads with the \`.append()\` method.`,
    problem: {
      title: 'A Bundle of Threads',
      description: 'Create a list named `inventory` that contains "sword" and "shield". Then, use the `.append()` method to add "potion" to the end of the list. Finally, create a variable `first_item` and set it to the first item in the list.',
      goals: [
        'Learn how to create a list.',
        'Modify a list by adding items with `.append()`.',
        'Access elements within a list using their index.',
      ],
      starterCode: `# Create your bundle of threads\ninventory = ...\n\n# Add a new thread\n...\n\n# Access the first thread\nfirst_item = ...`,
    },
  },
   {
    title: 'Loops',
    conceptExplanation: `When you have a large bundle of threads (a list), you often want to do the same thing to each one. A **loop** is a repeating stitch. The \`for\` loop in Python is a beautiful and simple pattern for this.
\`\`\`python
for thread in my_threads:
    # This code runs for each thread
    print(f"The color is: {thread}")
\`\`\`
Let's use a repeating stitch to combine a bundle of number-threads into a single, final thread.`,
    problem: {
      title: 'The Summation Stitch',
      description: 'Create a function `sum_list` that takes a list of numbers and returns their sum. This is a fundamental pattern, like the first basic stitch in a grand tapestry.',
      goals: [
        'Learn to iterate over a list using a `for` loop.',
        'Understand how to use an accumulator variable.',
        'Write a function that processes a list.',
      ],
      starterCode: `def sum_list(numbers):\n  total = 0\n  # Your repeating stitch goes here\n  return total`,
    },
  },
  {
    title: 'Dictionaries',
    conceptExplanation: `Sometimes, you need a more organized way to store related threads. A **dictionary** is like a detailed pattern card. It stores information in **key-value pairs**. Instead of an index, you use a descriptive key to find its value.
\`\`\`python
hero_pattern = {
  "name": "Arion",
  "level": 5,
  "has_magic": True
}
\`\`\`
You can access the information using square brackets, like \`hero_pattern["name"]\`. Let's create a pattern card for a character.`,
    problem: {
      title: 'The Hero\'s Pattern Card',
      description: 'Create a dictionary named `character` with three keys: `name` (a string), `hit_points` (an integer), and `is_brave` (a boolean). Then, create a new variable `character_name` and assign it the value of the `name` from your dictionary.',
      goals: [
        'Understand what a dictionary is and why it\'s useful.',
        'Learn to create a dictionary with key-value pairs.',
        'Access values in a dictionary using their key.',
      ],
      starterCode: `character = {\n  # Add your key-value pairs here\n}\n\n# Access the name value\ncharacter_name = ...`,
    },
  },
  {
    title: 'String Methods',
    conceptExplanation: `Your text threads (**strings**) come with their own set of magic stitches called **methods**. These let you easily modify and inspect them. For instance, \`.upper()\` creates an all-uppercase version of the thread, and \`.split()\` can break a thread into a list of smaller threads.
\`\`\`python
sentence = "The loom is ready"
words = sentence.split(" ") # Result: ['The', 'loom', 'is', 'ready']
uppercase_sentence = sentence.upper() # Result: 'THE LOOM IS READY'
\`\`\`
Let's practice with these string-specific stitches.`,
    problem: {
      title: 'Whispers and Shouts',
      description: 'Write a function `format_message` that takes a string. It should return a new string that is the same message but in all uppercase, followed by three exclamation marks.',
      goals: [
        'Learn to use the `.upper()` string method.',
        'Practice string concatenation or f-strings to add text.',
        'Combine methods and operators in a single function.',
      ],
      starterCode: `def format_message(message):\n  """Turns any message into a shout"""\n  pass`,
    },
  },
  {
    title: 'Looping with `range`',
    conceptExplanation: `Sometimes you need a repeating stitch that runs a specific number of times, not just over a list. The \`range()\` function is perfect for this. It generates a sequence of numbers that you can loop through.
\`\`\`python
# This stitch will repeat 5 times, for i = 0, 1, 2, 3, 4
for i in range(5):
    print("Stitching...")
\`\`\`
This is incredibly useful for creating patterns that have a defined size or length. Let's try it.`,
    problem: {
      title: 'Weaving a Banner',
      description: 'Write a function `make_banner` that takes a number, `length`. The function should return a string that is a banner of that length made of asterisks, like `*****` if the length is 5.',
      goals: [
        'Understand how to use `range()` in a `for` loop.',
        'Build up a string iteratively inside a loop.',
        'Use a loop to perform an action a specific number of times.',
      ],
      starterCode: `def make_banner(length):\n  banner = ""\n  # Your repeating stitch goes here\n  return banner`,
    },
  },
  {
    title: 'Putting It All Together',
    conceptExplanation: `You have learned to spin threads, weave patterns, make decisions, and work with bundles. Now, it's time to weave a small but complete piece of a tapestry.

This final challenge will require you to combine everything you've learned: variables, functions, dictionaries, lists, and loops. See how all the different stitches and threads come together to form a coherent design.`,
    problem: {
      title: 'Character Word Count',
      description: 'Write a function `count_words` that takes a sentence (a string). The function should return a dictionary where each key is a word in the sentence and the value is how many times that word appeared. Don\'t worry about case sensitivity; treat "The" and "the" as the same word.',
      goals: [
        'Combine knowledge of functions, strings, lists, and dictionaries.',
        'Use string methods like `.lower()` and `.split()`.',
        'Iterate through a list.',
        'Use conditional logic to build a dictionary of counts.',
      ],
      starterCode: `def count_words(sentence):\n  word_counts = {}\n  words = sentence.lower().split()\n  # Loop through the words and count them\n  \n  return word_counts`,
    },
  },
];


export const COURSES = {
  [Language.JavaScript]: JS_COURSE,
  [Language.Python]: PYTHON_COURSE,
};
