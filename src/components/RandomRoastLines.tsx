const RandomRoastLine = () => {
  const roastLines = [
    `I am sure you will not be able to guess that. I pity you. Take a hint and save your respect.`,
    `Wow, you're still trying? This word’s been laughing at you from the start.`,
    `At this point, I’m convinced you’re just here to waste time. Give it up, this word doesn’t even respect you.`,
    `I thought you were smarter than this. But I guess even a broken clock is right twice a day.`,
    `This is getting sad. Even my Wi-Fi connection is better at guessing than you are.`,
    `Congratulations! You've officially hit a new low. Guessing this word will be harder than finding a needle in a haystack... if you were blindfolded.`,
    `Look, we both know you're not going to get this. But please, entertain me a little longer.`,
    `Your keyboard must be crying from all those wrong guesses.`,
    `Each guess you make lowers my faith in humanity.`,
    `You’re not playing Hangman—you’re building a monument to failure.`,
    `If guessing was an Olympic sport, you'd still come last.`,
    `Honestly, this is painful to watch. Blink twice if you need help.`,
    `You're not solving the puzzle. You're just aggressively rearranging your ignorance.`,
    `Even a toddler smashing keys could do better.`,
    `You've unlocked a hidden level: rock bottom.`,
    `If this were a spelling bee, you'd be banned for life.`,
    `Are you trying to fail on purpose? Because it’s working.`,
    `At this point, I’d trust a potato to guess better than you.`,
    `You're not out of attempts yet? This is torture.`,
    `Mistakes were made... mostly by you.`,
    `You’re not just missing letters—you’re missing the point.`,
    `Do you need a map to find the right letters?`,
    `This word has standards. Sadly, your guesses don’t meet them.`,
    `Your logic is so off, it's starting to curve space-time.`,
    `It’s not the word that’s hard. It’s you that’s lost.`,
    `Somewhere, a dictionary is weeping.`,
    `Please stop. The alphabet deserves better.`,
  ];
  const index = Math.floor(Math.random() * roastLines.length);

  return <span>{roastLines[index]}</span>;
};

export default RandomRoastLine;
