import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  grid: {
    height: 800,
    marginTop: 256
  },
  inputSection: {
    textAlign: 'center',
    minWidth: '500px'
  }
}))

function App() {

  const classes = useStyle()

  const [text, setText] = useState('')
  const [todos, setTodo] = useState([])

  const onChange = (e) => {
    let { value } = e.target
    setText(value)
  }

  const addTodo = () => {
    if (text !== '') {
      setTodo([
        text,
        ...todos
      ])

      setText('')
    }
  }

  return (
    <Grid className={classes.grid} container direction="column" justify="flex-start" alignItems="center">
      <Grid item xs={1} className={classes.inputSection}>
        <TextField placeholder="what todo" value={text} onChange={onChange} />
        <Button onClick={addTodo} variant="contained" size="small" coloe="primary">ADD</Button>
      </Grid>
      {
        todos.map((item, index) => (
          <Grid item xs={1} key={index}>
            {item}
          </Grid>
        ))
      }
    </Grid>
  );
}

export default App;
