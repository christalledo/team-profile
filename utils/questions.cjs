function questions(condition) {
    switch (condition) {
        case "Add Engineer":
            return [
                {
                    // Description
                    type: 'input',
                    message: 'Please enter your employee github',
                    name: 'github',
                },
                {
                    type: 'input',
                    message: 'Please enter your employee name',
                    name: 'name',
                },
                {
                    // Table of Contents
                    type: 'input',
                    message: 'Please enter your employee id',
                    name: 'id',
                }]
            // Installation            ]
            break;
        case "Add Intern":
            return [
                {
                    // Description
                    type: 'input',
                    message: 'Please enter your employee school',
                    name: 'school',
                },
                {
                    type: 'input',
                    message: 'Please enter your employee name',
                    name: 'name',
                },
                {
                    // Table of Contents
                    type: 'input',
                    message: 'Please enter your employee id',
                    name: 'id',
                }]
            // Installation            ]
            break;
        case "View Menu":
            return [
                {
                    // Description
                    type: 'checkbox',
                    message: 'Please choose your next action',
                    choices: ["Add Engineer", "Add Intern", "Write to File"],
                    name: 'action'
                }]
            break;
        default:
            [
                {
                    // Description
                    type: 'input',
                    message: 'Please enter your manager office number',
                    name: 'github',
                },
                {
                    type: 'input',
                    message: 'Please enter your employee name',
                    name: 'name',
                },
                {
                    // Table of Contents
                    type: 'input',
                    message: 'Please enter your employee id',
                    name: 'id',
                }]
            break;
    }
}

module.exports = questions