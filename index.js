// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I have to ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adj = "special") {
      return `You are ${flair}${adj}${flair}!`;
    }
  }

  const encouragingPromptFunction = wrapAdjective("%");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are %a dedicated programmer%!"

  
