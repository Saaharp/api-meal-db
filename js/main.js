
document.querySelector('.button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
  fetch(url)
  .then(res => res.json())
  .then(data => {
        
          console.log(data.meals)
          document.querySelector('h2').innerText = data.meals[0].strMeal
          document.querySelector('h3').innerText = data.meals[0].strInstructions
          document.querySelector('.img').style.backgroundImage = `url(${data.meals[0].strMealThumb})`
        })
      .catch(err => {
          console.log(`error ${err}`)
      });
}