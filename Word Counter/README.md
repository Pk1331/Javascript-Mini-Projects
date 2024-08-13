# Word & Character Counter

## Description

This project is a simple Word & Character Counter built with HTML, CSS, and JavaScript. It allows users to input text into a textarea and automatically counts and displays the number of words and characters in real time.

## Live Demo
  You can view the live demo of the application [here](https://pk1331.github.io/Javascript-Mini-Projects/Word%20Counter/index.html) <br><br>

  ![word-counter](https://github.com/user-attachments/assets/def7dd73-0faf-4fb4-8bb2-dca5be587e07)

## Features

- **Real-time Counting**: The word and character counts are updated dynamically as the user types.
- **Responsive Design**: The layout is designed to be responsive, with a gradient background and styled counters.
- **User-Friendly Interface**: The interface is clean and easy to use, with clear labeling of word and character counts.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and layout, including gradient backgrounds and flexible box layout.
- **JavaScript**: Handles real-time counting of words and characters.

## File Structure

- `index.html`: The main HTML file that contains the structure of the Word & Character Counter.
- `style.css`: The CSS file for styling the HTML elements, including the background, layout, and text area.
- `script.js`: The JavaScript file that handles the real-time counting logic.

## How to Use

1. Clone or download the project files.
2. Open the `index.html` file in any web browser.
3. Type text into the textarea, and the word and character counts will be updated automatically.

## Example Code

### HTML

```html
<textarea rows="20" id="content"></textarea>
<div class="count">
    <div>
        <h3 id="word-count">0</h3>
        <p>Words</p>
    </div>
    <div>
        <h3 id="char-count">0</h3>
        <p>Characters</p>
    </div>
</div>
```
### Javascript
``` bash
   let data = document.getElementById("content");
   let word_count = document.querySelector(".word-count");
   let char_count = document.querySelector(".char-count");
   data.addEventListener('input', () => {
      let content = data.value;
      char_count.innerHTML = content.length;
     word_count.innerHTML = content.trim().split(/\s+/).length;
  });
```

