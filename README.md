# Casper's Friendly Slider

This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app), allowing for features like hot reloading and module support. Due to time constraints, I ended up building it out in React.

## Running Locally

To run this project locally, follow the steps below: 

1. Copy from the github repository
2. `npm install` to install any dependencies
3. `npm run start` to start in development mode
4. Open a browser tab to `localhost:3000`, if one does not open for you already

## Live Demo

Alternatively, you can visit the prototype at [Casper's Friendly Slider](https://caspers-friendly-slider.netlify.app/).

## Future Features

JavaScript Updates

1. Card Auto Scale: Depending on the width of the slider, cards may be too big or two small. We should set a min and max width of the cards, and change the number of cards in the slider to compensate for these issues. For example, if you're on a small mobile device, you should probably only see 1 card.
2. Arrow Fade Out: Currently the slider arrows always appear clickable. If you are at the beginning of the slider, the left arrow should be disabled. If you're at the end of the slider, the right arrow should be disabled. This signals to the user that you can not slide further in that direction.
3. Improved End-of-Scroll: Currently when you scroll to the right, it stops just before the last card scrolls *out* of the view. It should stop scrolling as soon as the last card scrolls into view, preventing white space.
4. Touch Interaction: Not all users will use this with a mouse that can easily click next/previous! We should implement the ability to scroll, as if on a touch screen.
5. Unit Tests: Duh.

Style Issues

1. The top border of cards in slider is being hidden by overflow.
2. There are line height issue with subtitle (i.e. the title and subtitle are too close together)