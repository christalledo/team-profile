// HTML PAGE

function generateTeamPage(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    
${employees.map((employee) => {
        return `
        <div class="card" style="width: 18rem;">
   <div class="card-header">
    ${employee.name}
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">${employee.id}</li>
     <li class="list-group-item">${employee.email}</li>
    ${getFourthItem(employee)}
   </ul>
 </div>`
    })
        }
    </body>
    
    </html>    
    `

}

const getFourthItem = ((employee) => {
    if (employee.getRole() === "Manager")
        return `<li class="list-group-item">${employee.officeNumber}</li>`
    else if (employee.getRole() === "Intern")
        return `<li class="list-group-item">${employee.school}</li>`
    else
        return `<li class="list-group-item">${employee.github}</li>`
}

)


module.exports = generateTeamPage;

