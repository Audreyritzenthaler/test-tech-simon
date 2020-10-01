export const randomChar = () => {
   const arrayChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '?', ':', '§', '%']
   const randomNumber = Math.floor(Math.random() * arrayChar.length)
   return arrayChar[randomNumber]
}

export const randomTime = (min, max) => {
   console.log(min)
   return Math.random() * (max - min) + min
}