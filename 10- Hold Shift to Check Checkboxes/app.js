const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){

// Check if they had the shift key down
// ANd check that they are checking it

let inBetween = false;
if (e.shiftKey && this.checked){
    // console.log('shift: ', e.shiftKey)
    // console.log('this.checked: ', this.checked)

// go ahead and do what we please
// loop over every single checkbox
    checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked){
            // console.log('this: ', this)
            // console.log('lastchecked:', lastChecked)
            inBetween = !inBetween
            // console.log('Starting to check them inbetween')
        }

        if(inBetween){
            checkbox.checked = true;
        }
    })

}
 lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
