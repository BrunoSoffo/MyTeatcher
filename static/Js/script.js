let teacherForms = document.getElementsByClassName("teacher-contract")

for (let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", function(event){
        event.preventDefault 
        // evita a atualização da pág após o submit

        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price

        alert("O valor total do contrato é de R$" + total)
    })
}