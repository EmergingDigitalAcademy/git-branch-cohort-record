/*
    Instructions: DO NOT MODIFY THIS FILE :)

    1. Clone this repository directly (without forking)
    2. Create your own feature branch based on the quote number
        that you are adding to this project.
        example: your branch could be called `feature-quote10`
    3. Work on your feature. Create your unique quote file
        (like `quote10.js`) and use module.exports to export
        a string that has a quote and, optionally, your name.
    3. Add the file, commit it, and push YOUR FEATURE BRANCH 
        up to GitHub (this is being pushed to EDA's repo for simplicity)
        `git push origin feature-quote10`
    4. Log into GitHub and create a Pull Request, which will
        request that the maintainer (Blaine/Instructor) merge in your cool
        new feature to the master branch. Be sure to make it descriptive!
    5. Blaine/Instructor will merge all your feature requests into master
    6. We can all pull master and see our quotes!

    Example:
    git checkout -b my-feature-branch
    git add .
    git status (go double check you're on the right branch)
    git commit -am "Feature complete: xyz"
    git push origin my-feature-branch

    Then go to GitHub and make a Pull Request back to master!
*/
const quotes = []
quotes.push(require('./ada-cohort/quote0.js'));
quotes.push(require('./ada-cohort/quote1.js'));
quotes.push(require('./ada-cohort/quote2.js'));
quotes.push(require('./ada-cohort/quote3.js'));
quotes.push(require('./ada-cohort/quote4.js'));
quotes.push(require('./ada-cohort/quote5.js'));
quotes.push(require('./ada-cohort/quote6.js'));
quotes.push(require('./ada-cohort/quote7.js'));
quotes.push(require('./ada-cohort/quote8.js'));
quotes.push(require('./ada-cohort/quote9.js'));
quotes.push(require('./ada-cohort/quote10.js'));
quotes.push(require('./ada-cohort/quote11.js'));
quotes.push(require('./ada-cohort/quote12.js'));
quotes.push(require('./ada-cohort/quote13.js'));

console.log('The Wall of Quotes!');
for (let quote in quotes) {
    console.log(quote);
}