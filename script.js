let numberOfSteps = 1;
let addStepBtn = $(".add-step");
let removeStepBtn = $(".remove-step");

addStepBtn.click(function() {
    numberOfSteps++;
    $(".submit-btn").remove();
    $('form').append(`<label for="title-${numberOfSteps}">Step ${numberOfSteps} Text</label>
    <input type="text-${numberOfSteps}" name="title-${numberOfSteps}" id="title-${numberOfSteps}" />
    <label for="image-${numberOfSteps}">Step ${numberOfSteps} Image</label>
    <input type="text" name="image-${numberOfSteps}" id="image-${numberOfSteps}" />
    <button class="submit-btn" type="submit">Submit</button>`)
})

removeStepBtn.click(function() {
    if (numberOfSteps == 1) return;
    numberOfSteps--;
    $(".submit-btn").remove();
    $('form').children().last().remove();
    $('form').children().last().remove();
    $('form').children().last().remove();
    $('form').children().last().remove();
    $('form').append(`
    <button class="submit-btn" type="submit">Submit</button>`)
})

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
    console.log(JSON.stringify(value));
  }

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);