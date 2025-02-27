document.getElementById("budgetSurveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    alert("Thank you for your feedback, " + name + "!");
    
    this.reset();  // Reset the form after submission
});
