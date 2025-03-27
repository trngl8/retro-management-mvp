document.querySelectorAll(".messageForm").forEach(form => {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let inputField = this.querySelector("input");
        let userInput = inputField.value.trim();
        let targetListId = this.getAttribute("data-target");
        let targetList = document.getElementById(targetListId);

        if (userInput !== "") {
            let messageDiv = document.createElement("a");
            messageDiv.textContent = userInput;
            messageDiv.classList.add("btn",  this.getAttribute("data-type"), "disabled",  "placeholder", "col-12", "text-start", "mb-2");

            targetList.prepend(messageDiv);

            inputField.value = "";
        }
    });
});
