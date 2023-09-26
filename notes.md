## Styling notes
### Buttons
- Header buttons: class name = headerButtons

### Selections 
- Selections div: class name = selectionContainer
- Unordered list: class name = selectionList
- image in list: class name = contestantPhoto


## API notes
- BIP contestants: `https://localhost:5001/api/Bip`
    ```
    [
  {
    "bipContestantId": 0,
    "name": "string",
    "pastAppearance": "string",
    "photo": "string",
    "seasonTotal": 0
  }
]
    ```

- GB contestants: `https://localhost:5001/api/Gb`
    ```
    [
  {
    "gbContestantId": 0,
    "name": "string",
    "age": 0,
    "hometown": "string",
    "occupation": "string",
    "bio": "string",
    "photo": "string",
    "seasonTotal": 0
  }
]
```

[firebase authentication tutorial](https://www.youtube.com/watch?v=9bXhf_TELP4)