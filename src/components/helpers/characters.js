export const randomChar = () => {
   const arrayChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '?', ':', '§', '%']
   const randomNumber = Math.floor(Math.random() * arrayChar.length)
   return arrayChar[randomNumber]
}

export const moreDifficult = (e) => {
   console.log("+")
 }

export const lessDifficult = (e) => {
   console.log("-")
 }

export const randomTime = () => {
   const max = 3000
   const min = 800
   return Math.random() * (max - min) + min
}