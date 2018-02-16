# Intents 
`intent` = action 
`slots` = parameter
```{
  "intents": [
    {
      "intent": "GetTodaysWrikeTasks",
      "slots": [
        {
          "name": "Tasks",
          "type": "LIST_OF_TASKS"
        },
        {
          "name": "Date",
          "type": "AMAZON.DATE"
        }
      ]
    }
  ]
}```