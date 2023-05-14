var cors = require('cors')

const express = require('express')
const app = express()
const port = 3000


app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == "dog") {
        res.json({'ss' : '멍멍'})
    } else if(name == "cat"){
        res.json({'ss' : '야옹'})
    } else if(name == "pig"){
        res.json({'ss' : '꿀꿀'})
    } else{
        res.json({'ss' : '알 수 없음'})
    }
})

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })