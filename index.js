// Write your code here!
const deleteMain = document.querySelector('#main')

deleteMain.remove()

const newHeader = document.createElement('h1')

document.body.append(newHeader)

newHeader.id="victory"


function headName(name){

	let headName = document.getElementById('victory')
	headName.textContent= `${name} is the champion` 

}
headName('brian')
