## TURTLE CHASE  

A cartoon word association game.

## Purpose  

This is a browser based game developed using HTML, CSS, and JavaScript (assisted by jQuery). The game was built as part of the Sparta Global IT consultant training course, as a week long project.  

## Functionality  

The game was all built on one html page, with six individual div screens. These divs consisted of three level pages, an introduction page, one win screen and one death screen. 

There are five linked CSS files for the different divs, and a CSS file containing the animation codes. Additionally, there is a JavaScript file containing all the logic.

The gameplay involves reading the randomised clue at the top of the level page and the associated number. The number refers to the number of words on the game board that are related to the clue. The player is tasked with making the right connections and choosing the correct words on the board to advance their green character bar, and progress to the next level. Each correct click gains the player one point. On each correct click, there is a 35% chance to spawn an additional clue in a side board panel. On ending their turn, or by clicking an incorrect or wrong answer, the computer will randomly choose one of their clues to become red and advance their red bar. If the player chooses a word belonging to the computer, the computer will advance once for that click, and then again as part of it's own move. Clicking a red computer word will also subtract one from the player's score.  

As well as the computer starting one step ahead, hidden in the words on the board there exists instant death words, that will end the game and present the death screen if clicked.  

The player wins by making all of the correct associations and correctly guessing all their words before the computer on each of the three levels. 

## Implementation  

####Technologies and Tools

The following were used in the building of this project:

* Semantic HTML5
* CSS3
* JavaScript ES5
* jQuery 2.2.4
* Git and Github for version control

## Screenshots 

Screenshot folder in the Github repository: 
[Still images from the game](https://github.com/MashR3/Project-One-JS-Game/tree/master/screenshots)

## Usage
#### Building and Running

Fork/clone this repository, and edit index.html. 

#### Customising 
Modification can be achieved by directly accessing and changing the contents of the HTML, CSS, of JavaScript files, available in the repository.
