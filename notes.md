# GPT Page
- We make toggle page for gpt search using redux / we can use useState also
- some css like outline for input box none, html tags like option and managing it using onChange / useRef
- Best Practice to make our app multi-Lingual (by making langConstant,constant and mapping all lang to option)
- Multi Language Support 
- Never push gptkey to github
- When we make api call from browser openai gives error because it tells that our key can be leaked , it tells to use backened to do api calls but we can disable it also

- When we are working on getting result from array then => to convert text into array we can use array.split(",").
- when we are searching all those movies in tmdb then it was async function so it returned array of promises as we used map. we used await and promise.all to wait till all promises are resolved 

- to handle keys we add them to .env file and always start name of key as REACT_APP to work and .env should be present at root lvl and no spaces while defining it. and restart app after adding .env file and add it to .gitignore

# Concept of Memoization
- if it already in store then do not make api call. !Important! Concept

- Tailwind css for Mobile Responsive
- md greater than medium devices 
- by default for mobile